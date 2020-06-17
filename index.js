module.exports = {
  globals: {
    MyGlobal: true
  },
  "extends": [
    "standard",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  "parser": "babel-eslint",
  "rules" : {
    "semi": [2, "never"],
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double"]
  }
};
