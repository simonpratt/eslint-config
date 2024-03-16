## Usage - Quick setup

Install the custom eslint config package as a dev depencency
```
npm i --save-dev @dtdot/eslint-config
```

Run the configuration utility to create your config files for you
```
npx -p @dtdot/eslint-config eslint-setup
```

<details>
  <summary>Legacy manual setup</summary>
  
  ## Usage - Legacy manaul setup

  ### Peer Dependences

  Install the peer dependencies via
  ```
  npm i --save-dev eslint prettier @dtdot/eslint-config
  ```

  ### Eslint

  Create an eslint confg file with the following contents

  `.eslintrc.js`
  ```js
  module.exports = {
    env: {
      node: true,
      es6: true,
      mocha: true,
      browser: true,
    },
    extends: ['@dtdot/eslint-config/base'],
    ignorePatterns: ['node_modules', 'dist', '.prettierrc.js', '.eslintrc.js'],
  };
  ```

  ### Prettier

  Create a prettier config file with the following contents

  `.prettierrc.js`
  ```js
  const config = require('@dtdot/eslint-config/prettier');
  module.exports = config;
  ```

</details>
