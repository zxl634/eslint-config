module.exports = {
  "extends": "../index.js",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  "plugins": [
    "jest",
    "react"
  ],
  "rules": {
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "react/prop-types": ["error", {
      "ignore": ["navigation"]
    }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "key|theme" }],
    "no-console": "off",
    "no-unexpected-multiline": "warn"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.6.1"
    }
  },
  "globals": {
    "console": true,
    "fetch": false,
    "Promise": true
  }
  ,"env": {
    "jest": true
  }
}
