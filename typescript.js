module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  // then add some extra good stuff for Typescript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  // Then we add our own custom typescript rules
  rules: {
    'react/require-default-props': 0,
    'import/prefer-default-export': 'off',

    // This is covered by the typescript compiler, so we don't need these rules
    'no-undef': 'off',
    'no-shadow': 'off',
  },
};
