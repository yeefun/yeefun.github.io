module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // custom
    'linebreak-style': 'off',
    'max-len': 'off',
  },
  // custom
  globals: {
    TweenLite: true,
    Power2: true,
    Power4: true,
    Back: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
