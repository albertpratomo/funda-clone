export default defineNuxtConfig({
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
