module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true,
    "es6": true
  },
  parserOptions: {
    ecmaVersion: 2020, // 允许解析现代 ECMAScript 功能
    sourceType: "module", // 允许使用module
    ecmaFeatures: {
      jsx: true, // 允许解析 JSX
    }
  },
  extends: [
    "eslint:recommended",
  ],
  rules: {
    // 用于覆盖从扩展配置中指定的规则
    "@typescript-eslint/no-empty-function": "off", // 去除空函数报错
    "@typescript-eslint/no-var-requires": "off", // 去除require报错
    "object-curly-spacing": ["error", "always"], // 对象两边添加空格
    quotes: [1, "double"], // 强制使用双引号
    "space-before-function-paren": [
      // 去除函数括号前空格
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "never",
      },
    ],
    "semi": [2, "always"], // 语句结束时使用分号
  },
};
