import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import node from "eslint-plugin-node/lib/configs/recommended-script.js";
import security from "eslint-plugin-security";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "next", // prevents error being thrown for the next() argument in error handling middlewares
        },
      ],
    },
  },
  {
    plugins: node,
  },
  security.configs.recommended,
  eslintConfigPrettier,
];
