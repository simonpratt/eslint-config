#!/bin/bash

# Get the directory of the script
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

read -p "Do you need react eslint rules? [y/n]: " setup_react_rules;

echo "Installing core linting dependencies"
npm i --save-dev @trivago/prettier-plugin-sort-imports @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier

if [ "$setup_react_rules" == "y" ]; then
    echo "Installing react linting dependencies"
    npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
fi

base_config="%% BASE_CONFIG %%"
react_config="%% REACT_CONFIG %%"
prettier_config="%% PRETTIER_CONFIG %%"

# Copy prettier config across
echo "Copying prettier config"
echo "$prettier_config" > prettier.config.js

# Copy the correct eslint config
echo "Copying eslint config"
if [ "$setup_react_rules" == "y" ]; then
    echo "$react_config" > eslint.config.js
else
    echo "$base_config" > eslint.config.js
fi