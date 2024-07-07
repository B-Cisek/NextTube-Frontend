// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    examplePrivateKey: process.env.NUXT_KEY, // override by .env
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL ?? "http://localhost:3000",
      apiUrl: process.env.NUXT_PUBLIC_API_URL ?? "http://localhost",
    },
  },
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/eslint"],
  tailwindcss: {
    viewer: true,
  },
  typescript: {
    typeCheck: false,
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
