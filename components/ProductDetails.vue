<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`${product.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7 font-bold">{{ product.title }}</h2>
        <p class="text-xl my-7 font-semibold" id="price">
          Price - ${{ product.price }}
        </p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="button">
          <div class="flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add To Cart
          </div>
        </button>
        &nbsp;
        <button class="button">
          <div class="flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
              />
            </svg>
            Buy Now
          </div>
        </button>
      </div>
    </div>
    <hr />
    <div class="container">
      <h2 class="text-3xl font-bold text-center text-[#111827] mt-8 uppercase">
        Product Reviews
      </h2>
      <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
        <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-gray-200 bg-opacity-60">
          <div class="flex flex-wrap items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-4"
              width="44"
              height="44"
              viewBox="0 0 24 24"
            >
              <path
                fill="#111827"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"
              />
            </svg>
            <h4 class="w-full md:w-auto text-xl font-heading font-medium">
              Aayush
            </h4>
            <div
              class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"
            ></div>
            <div class="inline-flex">
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>

              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- Review -->
        <div class="px-4 overflow-hidden md:px-16 pt-5 pb-5 bg-white">
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <p
                class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose font-semibold"
              >
                I haretra neque non mi aliquam, finibus hart bibendum molestie.
                Vestibulum suscipit sagittis dignissim mauris.
              </p>
              <div class="-mb-2">
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div
                    class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full"
                  >
                    <div
                      class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewbox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium"
                      >tag 1</span
                    >
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div
                    class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full"
                  >
                    <div
                      class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewbox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium"
                      >tag 2</span
                    >
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto mb-2">
                  <div
                    class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full"
                  >
                    <div
                      class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewbox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium"
                      >tag 3</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 text-right">
              <p class="mb-8 text-sm text-gray-500">Added 2 months ago</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2 mt-8 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
        <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-gray-200 bg-opacity-60">
          <div class="flex flex-wrap items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-4"
              width="44"
              height="44"
              viewBox="0 0 24 24"
            >
              <path
                fill="#111827"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"
              />
            </svg>
            <h4 class="w-full md:w-auto text-xl font-heading font-medium">
              Aayush
            </h4>
            <div
              class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"
            ></div>
            <div class="inline-flex">
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>

              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- Review -->
        <div class="px-4 overflow-hidden md:px-16 pt-5 pb-5 bg-white">
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <p
                class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose font-semibold"
              >
                I haretra neque non mi aliquam, finibus hart bibendum molestie.
                Vestibulum suscipit sagittis dignissim mauris.
              </p>
            </div>
            <div class="w-full md:w-1/3 text-right">
              <p class="mb-8 text-sm text-gray-500">Added 2 months ago</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2 mt-8 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
        <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-gray-200 bg-opacity-60">
          <div class="flex flex-wrap items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-4"
              width="44"
              height="44"
              viewBox="0 0 24 24"
            >
              <path
                fill="#111827"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"
              />
            </svg>
            <h4 class="w-full md:w-auto text-xl font-heading font-medium">
              Aayush
            </h4>
            <div
              class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"
            ></div>
            <div class="inline-flex">
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>

              <svg
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- Review -->
        <div class="px-4 overflow-hidden md:px-16 pt-5 pb-5 bg-white">
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <p
                class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose font-semibold"
              >
                I haretra neque non mi aliquam, finibus hart bibendum molestie.
                Vestibulum suscipit sagittis dignissim mauris.
              </p>
              <div class="-mb-2">
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div
                    class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full"
                  >
                    <div
                      class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewbox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium"
                      >tag 1</span
                    >
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div
                    class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full"
                  >
                    <div
                      class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewbox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium"
                      >tag 2</span
                    >
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto mb-2">
                  <div
                    class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full"
                  >
                    <div
                      class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewbox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium"
                      >tag 3</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 text-right">
              <p class="mb-8 text-sm text-gray-500">Added 2 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
img {
  max-width: 400px;
}
#price {
  --bg: #111827;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.5em 1em;
  background: var(--bg);
  transition: 0.2s;
  width: fit-content;
  animation: grad 5s infinite;
}

@keyframes grad {
  0% {
    background-color: #111827;
  }
  50% {
    color: #fff;
    transform: translate(-0.25rem, -0.25rem);
    background: #12b488;
    box-shadow: 0.25rem 0.25rem var(--bg);
  }
  100% {
    background-color: #111827;
  }
}

.button {
  --bg: #111827;
  --hover-bg: #12b488;
  --hover-text: #000;
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
  box-shadow: 0.25rem 0.25rem var(--bg);
}

.button:active {
  transform: translate(0);
  box-shadow: none;
}
</style>
