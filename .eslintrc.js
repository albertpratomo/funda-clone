module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:tailwindcss/recommended',
        '@nuxtjs/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'tailwindcss',
        'unused-imports',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        curly: ['error', 'all'],
        'eol-last': 'error',
        indent: ['error', 4, {SwitchCase: 1}],
        'no-multi-spaces': 'error',
        'no-param-reassign': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'never'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'sort-imports': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'tailwindcss/classnames-order': 'error',
        'tailwindcss/enforces-negative-arbitrary-values': 'error',
        'tailwindcss/enforces-shorthand': 'error',
        'tailwindcss/migration-from-tailwind-2': 'error',
        'unused-imports/no-unused-imports-ts': 'error',
        'vue/attributes-order': ['error', {alphabetical: true}],
        'vue/component-tags-order': ['error', {
            order: ['script', 'template', 'style'],
        }],
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'below',
        }],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        }],
        'vue/multi-word-component-names': 'off',
    },
    settings: {
        tailwindcss: {
            officialSorting: true,
        },
    },
};
