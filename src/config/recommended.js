const tseslint = require('typescript-eslint');
const prettierRecommended = require('eslint-config-prettier');
const js = require('@eslint/js');
const reactRecommended = require('eslint-plugin-react/configs/recommended');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];