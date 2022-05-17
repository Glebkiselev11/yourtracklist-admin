/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:vue/vue3-essential",
        "@vue/eslint-config-typescript/recommended",
    ],
    rules: {
        "max-len": ["error", {
            code: 90,
        }],
        indent: ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": [],
        }],
    },
};
