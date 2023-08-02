[![GitHub last commit](https://img.shields.io/github/last-commit/danieldanielsson/dotfiles)](https://github.com/DanielDanielsson/eslint-config-danieldanielsson)
[![npm version](https://badge.fury.io/js/@danieldanielsson%2Feslint-config.svg)](https://badge.fury.io/js/@danieldanielsson%2Feslint-config)


# The eslint of truth and justice. 

## Installation

1. If you don't already have a `package.json` file, create one with `npm init -y`.

2. Then we need to install this config

```
npm i @danieldanielsson/eslint-config
```

3. We need to put our eslint settings in a file in the root of your project. Create a `.eslintrc` or `.eslintrc.js` file for that:

For javscript projects, use `@danieldanielsson/eslint-config`. (Please don't use javascript 🙏)
```json
{
  "extends": ["@danieldanielsson/eslint-config"]
}
```

For TypeScript projects, use `@danieldanielsson/eslint-config/typescript`.

```json
{
  "extends": ["@danieldanielsson/eslint-config/typescript"]
}
```

TypeScript users will also need a `tsconfig.json` file in their project. An empty object (`{}`) will do! 

4. And let's add two scripts to our package.json to lint and fix lint errors:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

5. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`.

## Customization

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```js
{
  "extends": [
    "@danieldanielsson/eslint-config/typescript"
  ],
  "rules": {
    "no-console": 2,
  }
}
```

### Prettier Rules

If you want custom [prettier options](https://prettier.io/docs/en/options.html), it's recommended to create a `.prettierrc` file in your root directory like so:

```js
{
  "singleQuote": true,
  "endOfLine": "auto",
  "tabWidth": 4
}
```

## VSCode

Once you have done the above installs, I recommend you to configure VSCode to lint and fix for you. Here's hpw I do it:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VSCode settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```json

 "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.format.enable": true,
  "eslint.workingDirectories": [],
  "eslint.runtime": "",
  "eslint.debug": true,

// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript][javascriptreact][typescript][typescriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VSCode.

