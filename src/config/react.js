const tseslint = require('typescript-eslint');
const prettierRecommended = require('eslint-config-prettier');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores: ['node_modules', 'dist', 'eslint.config.js', 'prettier.config.js'],
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  },
];