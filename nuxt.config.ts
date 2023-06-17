// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  runtimeConfig: {
    public: {
      secret: process.env.SUPABASE_URL,
    }
  }
})


