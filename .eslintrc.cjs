module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "simple-import-sort",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "react/react-in-jsx-scope": "off",

    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_" },
    ],
  },
};