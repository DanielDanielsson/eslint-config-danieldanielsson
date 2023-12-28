module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './.eslintrc.js',
  ],
  // then add some extra good stuff for Typescript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'typescript-sort'],
  // Then we add our own custom typescript rules
  rules: {
    'react/require-default-props': 0,
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
    'typescript-sort/interface': 'error',
    'typescript-sort/type': 'error',
    'typescript-sort/enum': 'error',
    'typescript-sort/arrowfunc-object-params': 'error',
  },
};
