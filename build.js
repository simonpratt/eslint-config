const fs = require('fs');

const setupFile = fs.readFileSync('src/setup.sh');
const baseConfig = fs.readFileSync('src/example-config/base.js');
const reactConfig = fs.readFileSync('src/example-config/react.js');
const prettierConfig = fs.readFileSync('src/example-config/prettier.js');

const setupFileString = setupFile.toString();
const substitutedFile = setupFileString
  .replace('%% BASE_CONFIG %%', baseConfig.toString())
  .replace('%% REACT_CONFIG %%', reactConfig.toString())
  .replace('%% PRETTIER_CONFIG %%', prettierConfig.toString());

fs.mkdirSync('bin', { recursive: true });
fs.writeFileSync('bin/setup.sh', substitutedFile);
