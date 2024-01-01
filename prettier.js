/**
 * These rules will migrate prettier formatting rules to eslint.
 *
 * We need both eslint-plugin-prettier and eslint-config-prettier. The difference between them is that the eslint-config-prettier
 * turns off all rules that are unnecessary or might conflict with Prettier and the eslint-plugin-prettier will allow us to add
 * prettier configuration to eslint rules in eslint.rc.
 *
 * It's also allowed to ommit the "eslint-config-" and "eslint-plugin-" part of the package names, which can make it confusing for
 * when we add "prettier" to both the plugins and extends properties.
 */

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        endOfLine: 'auto',
        quoteProps: 'consistent',
        singleQuote: true,
      },
    ],
  },
};
