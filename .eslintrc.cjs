module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/no-unresolved': [2, { 'ignore': ["^@"] }]
  },
}