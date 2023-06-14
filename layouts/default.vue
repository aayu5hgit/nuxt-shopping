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

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink to="/" class="flex items-center">
          <img
            src="../assets/images/nuxt-logo.png"
            class="h-8 mr-3"
            alt="Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Nuxt Shopping</span
          >
        </NuxtLink>
        
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <NuxtLink
                to="/"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >About</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/products"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Products</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
