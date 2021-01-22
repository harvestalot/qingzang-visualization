module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'no-cond-assign': ['error', 'except-parens'],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'linebreak-style': ['off', 'windows'],
  },
};
