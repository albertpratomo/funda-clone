// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'swiper/css',
    ],
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        injectPosition: 'last',
    },
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'https://partnerapi.funda.nl',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
    },
});
