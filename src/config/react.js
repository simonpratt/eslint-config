const tseslint = require('typescript-eslint');
const prettierRecommended = require('eslint-config-prettier');
const js = require('@eslint/js');
const reactRecommended = require('eslint-plugin-react/configs/recommended');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactRecommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    }
  },
];