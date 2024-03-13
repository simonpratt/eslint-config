const tseslint = require('typescript-eslint');
const js = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    }
  },
];