// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: ['@nuxt/typescript-build'],
  runtimeConfig: {
    // sendGrid: process.env.SENDGRID_API_KEY,
    public: {
      apiBase: process.env.API_BASE
    }
  }
})
