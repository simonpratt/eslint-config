const config = require('@dtdot/eslint-config');

module.exports = [
  config.eslint.configs.react,
  {
    ignores: ['node_modules', 'dist', 'eslint.config.js', 'prettier.config.js'],
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  }
]