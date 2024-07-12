// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/eslint-module', "@nuxt/ui", "@pinia/nuxt"],

  runtimeConfig: {
    examplePrivateKey: process.env.NUXT_KEY, // override by .env
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL ?? "http://localhost:3000",
      apiUrl: process.env.NUXT_PUBLIC_API_URL ?? "http://localhost",
    },
  },

  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  tailwindcss: {
    viewer: true,
  },

  typescript: {
    typeCheck: true,
  },

  experimental: {
    restoreState: true,
  },

  compatibilityDate: "2024-07-07",
});