module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
  ],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
    "class-methods-use-this": [ 0 ],
    "import/no-unresolved": [ 2, { caseSensitive: false } ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    },
    "import/extensions": [
      ".jsx",
      ".js"
    ]
  },
  "env": {
    "es6": true, 
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  }
}; 
