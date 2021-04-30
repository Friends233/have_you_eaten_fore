// 1. 关闭段落校验
// /* eslint-disable */
// /* eslint-enable */
// 2. 关闭当前行校验
// // eslint-disable-line
// 3. 关闭下一行校验
// // eslint-disable-next-line

module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: [1, 'allow-null'], // 使用 === 替代 ==
    "@typescript-eslint/no-explicit-any": ["off"], // 取消any类型警告
    "endOfLine": "off"
  }
}
