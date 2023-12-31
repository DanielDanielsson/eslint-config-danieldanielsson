module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'typescript-sort'],
  rules: {
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
    'typescript-sort/interface': 'error',
    'typescript-sort/type': 'error',
    'typescript-sort/enum': 'error',
    'typescript-sort/arrowfunc-object-params': 'error',
  },
};
