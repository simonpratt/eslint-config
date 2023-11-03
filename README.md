## Usage - Quick setup

Install the custom eslint config package as a dev depencency
```
npm i --save-dev @dtdot/eslint-config
```

Run the configuration utility to create your config files for you
```
npx eslint-setup
```

<details>
  <summary>Legacy manual setup</summary>
  
  ## Usage - Legacy manual setup

  ### Peer Dependences

  Install the peer dependencies via
  ```
  npm i --save-dev @trivago/prettier-plugin-sort-imports @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier @dtdot/eslint-config
  ```

  If using the react config, install the following packages too
  ```
  npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
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
