module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    "eslint:recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/no-empty-function": "off", //去除空函数报错
    "@typescript-eslint/no-var-requires": "off", //去除require报错
    "object-curly-spacing": ["error", "always"],
    quotes: [1, "double"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "never",
      },
    ],
  },
};
