/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "@angular-eslint/eslint-plugin",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "root": true,
    "rules": {
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": "tl",
                "style": "kebab-case"
            }
        ],
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": "tl",
                "style": "camelCase"
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "comment-type": true
                }
            }
        ],
        "import/no-deprecated": "warn",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": false
            }
        ],
        "import/order": "error"
    }
};
