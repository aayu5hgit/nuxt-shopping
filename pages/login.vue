<script setup lang="js">
import { createClient } from "@supabase/supabase-js";

definePageMeta({
  middleware: ['auth']
})

const email = ref('')
const password = ref('')
const isSignUp = ref(false)

const client = useSupabaseClient()

const signUp = async () => {
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    phone: phone.value
  })
  console.log('data', data)
  console.log('error', error)
}

const login = async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  console.log('data', data)
  console.log('error', error)
}

const data = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (data.value) {
      navigateTo('/')
    }
  })
})
</script>

<template>
  <div class="max-w-lg mx-auto mt-8">
    <h1 class="text-3xl font-black text-[#111827]">ATTIRE</h1>
    <p class="mt-4 font-semibold">
      Fashion that speaks volumes, without saying a word
    </p>
    <form
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      class="flex flex-col gap-2 mt-12"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 text-black rounded bg-charcoal-600 mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 text-black rounded bg-charcoal-600 mb-4"
        required
      />
      <button
        type="submit"
        class="button"
      >
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </button>
    </form>
    <button
      @click="isSignUp = !isSignUp"
      class="w-full mt-8 text-sm text-center underline text-gray-500"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template>

<style>
.button {
  --bg: #111827;
  --hover-bg: #12b488;
  --hover-text: #000;
  --bgt: #07090f;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.8em 2em;
  background: var(--bg);
  transition: 0.2s;
}

.button:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem, -0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bgt);
}
</style>