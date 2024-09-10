declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DB_HOST: string;
    DB_NAME: string;
    DB_PASSWORD: string;
    DB_USER: string;
    [key: string]: string | undefined;
  }
}
