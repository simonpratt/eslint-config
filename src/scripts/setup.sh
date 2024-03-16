#!/bin/bash

# Get the directory of the script
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Check to see if .eslint.rc exists
if [ -f ".eslintrc.js" ] || [ -f ".eslintrc.cjs" ]; then
    read -p "Would you like to remove old eslint config? [y/n]: " remove_old_config;

    if [ "$remove_old_config" == "y" ]; then
        rm -f .eslintrc.js
        rm -f .eslintrc.cjs
        rm -f .prettierrc.js
        rm -f .prettierrc.cjs

        npm r \
        eslint-plugin-react \
        eslint-plugin-react-hooks \
        @trivago/prettier-plugin-sort-imports \
        @typescript-eslint/eslint-plugin \
        @typescript-eslint/parser \
        eslint \
        eslint-config-prettier \
        eslint-plugin-prettier \
        prettier \
        @dtdot/eslint-config
    fi
fi

read -p "Do you need react eslint rules? [y/n]: " setup_react_rules;

echo "Installing core linting dependencies"
npm i --save-dev @dtdot/eslint-config eslint prettier

# Placeholder values
# The file contents gets substituted in here at build
# Substituting was easier than finding the files within node modules at run time
base_config="%% BASE_CONFIG %%"
react_config="%% REACT_CONFIG %%"
prettier_config="%% PRETTIER_CONFIG %%"

# Check to see if we should use .cjs or .js file extension
if grep -q '"type": "module"' package.json; then
    echo "Detected type module in package.json"
    echo "Using .cjs file extension for eslint and prettier config files"
    eslint_config_file="eslint.config.cjs"
    prettier_config_file="prettier.config.cjs"
else
    echo "No type module detected in package.json"
    echo "Using .js file extension for eslint and prettier config files"
    eslint_config_file="eslint.config.js"
    prettier_config_file="prettier.config.js"
fi

# Copy prettier config across
echo "Copying prettier config"
echo "$prettier_config" > "$prettier_config_file"

# Copy the correct eslint config
echo "Copying eslint config"
if [ "$setup_react_rules" == "y" ]; then
    echo "$react_config" > "$eslint_config_file"
else
    echo "$base_config" > "$eslint_config_file"
fi

# Update package.json with a new lint command
echo "Updating package.json with new lint command, update the target directory as needed"
sed -i '' 's/"lint": ".*"/"lint": "eslint ."/' package.json