module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "functional",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:functional/stylistic",
        "plugin:functional/no-exceptions",
    ],
    rules: {
        "no-var": ["error"],
        "no-param-reassign": ["error"],
        "prefer-const": ["error"],
        "semi": ["error", "never"],
        "prefer-arrow-callback": ["error"],
        "func-style": ["error", "expression", { "allowArrowFunctions": true}],
        "functional/no-classes": ["error"],
        "functional/no-this-expressions": ["error"],
        "functional/no-let": ["error"], // <- throws Object.hasOwn exception
        "functional/immutable-data": ["error", { "ignoreImmediateMutation": true }], // <- throws Object.hasOwn exception
    }
}