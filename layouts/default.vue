<template>
  <div>
    <!-- <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
          </ul>
        </nav>
      </header> -->

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
          <li><NuxtLink class="btn hover:text-gray-200 button" to="/products">Products</NuxtLink></li>
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
      <!-- <NuxtLink class="navbar-burger self-center mr-12 xl:hidden" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </NuxtLink> -->
    </nav>
    
  </section>
</div>
<div class="fixed bottom-0 right-0 mb-2 mr-4 z-10">
    <div>
        <NuxtLink to="https://www.github.com/aayu5hgit/" title="Github"  target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:bg-[#12b488] transform hover:scale-110 hover:rotate-12 ">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
        </NuxtLink>
    </div>
</div>
    </div>
    <footer class="xl:hidden container mx-auto p-4 flex justify-between bg-[#111827]">
      <ul class="flex gap-3 ">
        <li><NuxtLink to="/" class="button-sm">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="button-sm">About</NuxtLink></li>
        <li><NuxtLink to="/products" class="button-sm">Products</NuxtLink></li>
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