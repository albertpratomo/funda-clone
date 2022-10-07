/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'components/**/*.{vue,js}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
            },
        },
        extend: {
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
