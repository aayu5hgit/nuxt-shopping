<script>
// const client = useSupabaseClient();
// function logout() {
//   if(client.auth.signOut()){
//     console.log(client);
//   }
// }
export default {
        methods: {
            logout() {
                if(client.auth.signOut()){
                  navigateTo('/login');
                }
            }
        }
    }
</script>
<template>
  <div>
<div class="flex flex-wrap  place-items-top ">
  <section class="relative mx-auto">
    <nav class="flex justify-between bg-gray-900 text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <NuxtLink class="text-3xl font-bold font-heading" to="/">
          <img class="h-9" src="../assets/images/nuxt-logo.png" alt="logo">
        </NuxtLink>
        <h2 class="text-2xl font-bold ml-4">ATTIRE</h2>
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><NuxtLink class="hover:text-gray-200 button" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="hover:text-gray-200 button" to="/about">About</NuxtLink></li>
          <li><NuxtLink class="btn hover:text-gray-200 button" to="/products">
            <!-- <span v-if="logout">Products</span>  -->
            Products</NuxtLink></li>
          <li><NuxtLink class="btn hover:text-gray-200 button" to="/login">Login</NuxtLink></li>
        </ul>

        <div class="hidden xl:flex items-center space-x-5 items-center">
          <NuxtLink class="flex items-center hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
          </NuxtLink>

          <NuxtLink class="flex items-center hover:text-gray-200" to="/profile">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Responsiveness -->
      <NuxtLink class="xl:hidden flex mr-6 items-center" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="flex absolute -mt-5 ml-4">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </NuxtLink>
    </nav>
    
  </section>
</div>
<div class="fixed bottom-0 right-0 mb-2 mr-4 z-50">
    <div>
        <!-- <NuxtLink to="https://www.github.com/aayu5hgit" title="Github"  target="_blank" class="block w-12 h-12 rounded-full transition-all shadow hover:bg-[#12b488] transform hover:scale-110 hover:rotate-12 "> -->
          <NuxtLink
          to="https://www.github.com/aayu5hgit" title="Github"  target="_blank"
                  class="flex items-center justify-center text-white transition-all duration-200 bg-[#111827] rounded-full w-12 h-12 hover:bg-[#12b488] focus:bg-blue-600"
                >
                  <svg
                    class="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
            <!-- <img class="object-cover object-center w-full h-full rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/> -->
        </NuxtLink>
    </div>
</div>
    </div>
    <footer class="xl:hidden container mx-auto p-4 flex justify-between bg-[#111827]">
      <ul class="flex gap-3 ">
        <li><NuxtLink to="/" class="button-sm">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="button-sm">About</NuxtLink></li>
        <li><NuxtLink to="/products" class="button-sm" >Products</NuxtLink></li>
        <li><NuxtLink to="/login" class="button-sm">Login</NuxtLink></li>
        <li><NuxtLink to="/profile" class="button-sm">Profile</NuxtLink></li>
      </ul>
    </footer>
    <div class="container mx-auto p-4">
      <slot />
    </div>
</template>

<style scoped>
.button-active {
  color: #12b488;
}
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
.button-sm {
  --bg: #111827;
  --hover-bg: #12b488;
  --hover-text: #000;
  --bgt: #07090f;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.3em 0.3em;
  background: var(--bg);
  transition: 0.2s;
  font-weight: 600;
}

.button-sm:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem, -0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bgt);
}
.button:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem, -0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bgt);
}

</style>