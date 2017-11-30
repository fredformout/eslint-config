module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'max-len': [2, {
      code: 120,
      ignoreUrls: true,
    }],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'import/extensions': ['off', 'never'],
    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': 0,
    'no-plusplus': ['off'],
    'consistent-return': ['off'],
  },
}
