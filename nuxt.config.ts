export default defineNuxtConfig({
    app: {
        head: {
            title: 'Funda Clone',
            link: [{rel: 'icon', type: 'image/png', href: '/favicon.png'}],
        },
    },
    css: [
        'swiper/css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-proxy',
    ],
    tailwindcss: {
        injectPosition: 'last',
    },
    proxy: {
        options: {
            target: 'https://partnerapi.funda.nl',
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/',
            },
            pathFilter: [
                '/api/',
            ],
        },
    },
});
