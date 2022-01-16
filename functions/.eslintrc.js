module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "standard",
  ],
  parserOptions: {
    ecmaVersion: 12
},
  rules: {
    "no-console": "off"
  },
};
