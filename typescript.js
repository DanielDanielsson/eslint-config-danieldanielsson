module.exports = {
  'globals': {
    React: true,
    JSX: true,
  },
  'extends': [
    'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  // then add some extra good stuff for Typescript
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    project: './tsconfig.json',
  },
  'plugins': ['@typescript-eslint', 'typescript-sort'],
  // Then we add our own custom typescript rules
  'rules': {
    'react/require-default-props': 0,
    'import/prefer-default-export': 'off',

    // This is covered by the typescript compiler, so we don't need these rules
    'no-undef': 'off',
    'no-shadow': 'off',
    'typescript-sort/sort-interface': 'error',
    'typescript-sort/sort-type': 'error',
    'typescript-sort/sort-enum': 'error',
    'typescript-sort/sort-arrowfunc-object-params': 'error',
  },
  // This rule will enforce importing TS types via a type import.
  '@typescript-eslint/consistent-type-imports': 'error',
};
