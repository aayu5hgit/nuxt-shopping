import { createClient } from '@supabase/supabase-js'
import { defineNuxtConfig } from 'nuxt3'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      secret: process.env.SUPABASE_URL,
    }
  }
})