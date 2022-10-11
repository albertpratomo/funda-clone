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
            // Proxy the funda API endpoint to get around the CORS restriction.
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
