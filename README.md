# node-ts-template
Node.js with Typescript Template with Production Setup

Features:
- Node version check with check-engine=true, and custom check-engine script that validates node version at runtime.
- Eslint and Prettier
- Husky and lint-staged for preventing commit of unlinted code.
- Basic setup for SQL database using Sequelize
- cross-env for Windows/Mac/Linux support

How to Setup:
- Clone the repo and run npm i
- Create .env.development and .env.production and add the variables declared in env.d.ts.
- npm run dev to start local server.

Future Plans:
- Use Node's native support for Typescript once it's part of LTS.
