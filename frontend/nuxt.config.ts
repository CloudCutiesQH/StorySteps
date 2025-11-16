export default defineNuxtConfig({
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css'],
    devtools: { enabled: true },
    ssr: false,
    nitro: {
        devProxy: {
            '/api': { // The path to match in your Nuxt app
                target: 'http://localhost:3001', // The target URL of your backend API
                changeOrigin: true, // Typically set to true for proxies
                prependPath: true, // Whether to prepend the matched path to the target URL
            },


        },
    },
    })
