module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
};
