import fiskerEslintConfig from '@fisker/eslint-config'

export default [
  ...fiskerEslintConfig,
  {
    rules: {
      'unicorn/import-style': 'off',
      'unicorn/no-hex-escape': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'n/prefer-global/process': 'off',
    },
  },
]
