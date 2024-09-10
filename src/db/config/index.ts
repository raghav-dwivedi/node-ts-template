import { Sequelize } from "sequelize";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
  throw new Error("Missing database environment variables");
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  logging: true,
  dialect: "mysql",
  pool: {
    max: 10, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // The maximum time, in milliseconds, that a connection can be idle before being released
  },
});

export default sequelize;
