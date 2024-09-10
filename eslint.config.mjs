import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/dist", "**/.prettierrc.js", "**/.huskyrc.js", "**/.lintstagedrc.js"],
  },
  ...compat
    .extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier")
    .map((config) => ({ files: ["**/*.ts"], ...config })),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",

      parserOptions: {
        project: "tsconfig.json",
      },
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-non-null-assertion": "error",
      eqeqeq: "error",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-constant-condition": "error",
      curly: "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-redeclare": "error",
      indent: ["off"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "callback-return": "warn",
      "handle-callback-err": "error",
      "no-path-concat": "error",
      "no-multiple-empty-lines": "error",
      "prefer-const": "error",
    },
  },
];
