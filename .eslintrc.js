module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "airbnb/base"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    //"semi": "error",
    //"quotes": ["error", "single"]
  }
};
