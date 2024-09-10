import { createClient, RedisClientType } from "redis";

const CONNECTION_URI = process.env.REDIS_URI || "";

// Set a value in Redis with expiry
const set = async (key: string, value: string, expiry: number): Promise<void> => {
  const client: RedisClientType = createClient({ url: CONNECTION_URI });
  await client.connect();
  await client.set(key, value, { EX: expiry }); // expiry in seconds
  await client.disconnect();
};

// Get a value from Redis
const get = async (key: string): Promise<string | null> => {
  const client: RedisClientType = createClient({ url: CONNECTION_URI });
  await client.connect();
  const value = await client.get(key);
  await client.disconnect();
  return value;
};

// Remove a value from Redis
const remove = async (key: string): Promise<void> => {
  const client: RedisClientType = createClient({ url: CONNECTION_URI });
  await client.connect();
  await client.del(key);
  await client.disconnect();
};

export default {
  set,
  get,
  remove,
};
