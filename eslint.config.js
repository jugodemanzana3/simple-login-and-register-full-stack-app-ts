import globals from "globals"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import prettierPlugin from "eslint-plugin-prettier"
import babelParser from "@babel/eslint-parser"

const pluginOptions = {
  prettier: prettierPlugin,
  "import/parsers": babelParser,
}

const languageOptions = {
  globals: {
    ...globals.node,
  },
  ecmaVersion: "latest",
  sourceType: "module",
  parser: babelParser,
}

export default [
  { files: ["**/src/*.ts"] },
  {
    ignores: ["node_modules/**/*", "prod/**/*", "dist/**/*", "comment-code.js"],
  },
  {
    plugins: {
      ...pluginOptions,
    },
  },
  {
    languageOptions: {
      ...languageOptions,
    },
  },
  // {
  //   rules: {
  //     "prettier/prettier": "error",
  //   },
  // },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
]
