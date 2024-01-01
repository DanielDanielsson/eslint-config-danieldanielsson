module.exports = {
  extends: ['airbnb', 'prettier', './typescript.js', './prettier.js'],
  plugins: ["simple-import-sort"],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': 0,
    'import/no-default-export': 'error',
    "simple-import-sort/imports": [
        "error",
        {
          "groups": [["^(react)", "^(next)", "^node:", "^@?\\w", "^(@/\\w)", "^", "^\\."]]
        }
      ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
