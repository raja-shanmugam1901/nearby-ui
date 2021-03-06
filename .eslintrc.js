module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      '@vue/typescript',
    ],
    rules: {
      'class-methods-use-this': 0,
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
        ],
        env: {
          mocha: true,
        },
      },
    ],
  };