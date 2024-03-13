const fs = require('fs');

const setupFile = fs.readFileSync('src/scripts/setup.sh');
const baseConfig = fs.readFileSync('src/templates/base.config.js');
const reactConfig = fs.readFileSync('src/templates/react.config.js');
const prettierConfig = fs.readFileSync('src/templates/prettier.config.js');

const setupFileString = setupFile.toString();
const substitutedFile = setupFileString
  .replace('%% BASE_CONFIG %%', baseConfig.toString())
  .replace('%% REACT_CONFIG %%', reactConfig.toString())
  .replace('%% PRETTIER_CONFIG %%', prettierConfig.toString());

fs.mkdirSync('bin', { recursive: true });
fs.writeFileSync('bin/setup.sh', substitutedFile);
