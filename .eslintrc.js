module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node": true
        
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:gridsome/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "gridsome"
    ],
    rules: {
        semi: [2, "always"]
    }
};