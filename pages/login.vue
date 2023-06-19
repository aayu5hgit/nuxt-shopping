<script setup lang="js" >
import { createClient } from "@supabase/supabase-js";
import { defineComponent } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

const toast = () => {
  createToast({
title: 'Success',
description: 'Verification Sent on Registered Email'
},
{
showIcon: 'true',
type: 'success',
})
    return { toast }
}

const email = ref('')
const password = ref('')
const isSignUp = ref(false)

const client = useSupabaseClient()


const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })
  console.log('user', user)
  console.log('error', error)
  
}

const login = async () => {
  const { user, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  console.log('user', user)
  console.log('error', error)
  
}


//   async function signInWithGitHub() {
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'github',
//   })
//   console.log('Provider', provider)
//   console.log('data', data)
//   console.log('error', error)
// }



const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/')
    }
  })
})
</script>

<template>
  <div class="max-w-lg mx-auto mt-8 text-center"> 
   
    <h1 class="text-3xl font-black text-[#111827]">ATTIRE</h1>
    <p class="mt-4 font-semibold">
      Fashion that speaks volumes, without saying a word
    </p>
    <form
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      class="flex flex-col gap-2 mt-12 items-center"
    >
    <div class="form__group field">
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 mb-4 form__field"
        required
      /><label for="name" class="form__label">Name</label> </div>
      <div class="form__group field">
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 mb-4 form__field"
        required
        minlength="6"
      /><label for="password" class="form__label">Password</label></div>

      <button type="submit" class="button_l">
        <span v-if="isSignUp" @click="toast"> Sign up </span>
        <span v-else > Log in </span>
      </button>
     
    </form>
    
      <!-- <form
      class="flex flex-col gap-2 mt-12"
    ><button type="submit" class="button" @click="signInWithGitHub()">
        Sign in With GitHub
      </button>
    </form> -->
    <button
      @click="isSignUp = !isSignUp"
      class="w-[100%] mt-8 text-sm self-center underline text-gray-500"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template>

<style>
.button_l {
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
  width: 80%;
}

.button_l:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem, -0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bgt);
}

.form__group {
  position: relative;
  padding: 20px 0 0;
  width: 80%;    
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  color: #111827;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 17px;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #a5a5a5;
  font-weight: 400;
  pointer-events: none;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #12b488, #111827);
  border-image-slice: 1;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #12b488;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}
</style>
