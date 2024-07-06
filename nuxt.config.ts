// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/eslint"],
  tailwindcss: {
    viewer: true,
  },
  nitro: {
    routeRules: {
      "/backend/**": {
        proxy: "http://localhost/**", // http://api.example-domain/
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: {},
    },
  },
  experimental: {
    restoreState: true,
  },
});
