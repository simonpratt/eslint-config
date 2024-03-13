const prettier = require('./config/prettier');
const recommended = require('./config/recommended');
const react = require('./config/react');

module.exports = {
  eslint: {
    configs: {
      recommended,
      react,
    },
  },
  prettier: {
    configs: {
      recommended: prettier,
    },
  },
};
