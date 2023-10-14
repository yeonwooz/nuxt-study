// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    $production: {
        routeRules: {
            '/**': { isr: true },
        },
    },
    $development: {
        //
    },
    vite: {
        vue: {
            customElement: true,
        },
        vueJsx: {
            mergeProps: true,
        },
    },
});
