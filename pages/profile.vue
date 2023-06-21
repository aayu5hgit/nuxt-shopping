<script setup lang="ts">
import { defineComponent } from "vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
const client = useSupabaseClient();
definePageMeta({
  middleware: ["auth"],
});
const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo("/login");
    }
  });
});

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
  console.log("You are using a Mobile Device");
} else {
  console.log("You are using Desktop");
}

const toast = () => {
  createToast(
    {
      title: "Oops",
      description: "You have been logged out!",
    },
    {
      type: "danger",
      showIcon: true,
    }
  );
  return { toast };
};
</script>
<template>
  <div class="flex flex-row justify-center items-center">
    <div class="card mb-6  rounded-lg	">
      <div class="content ">
        <div class="back ">
          <div class="back-content ">
            <svg
              stroke="#ffffff"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50px"
              width="50px"
              fill="#ffffff"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>

              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#12b488"
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"
                />
              </svg>
            </svg>
            <strong class="text-2xl">Your Profile</strong>
          </div>
        </div>

        <div class="title border-t-2 border-[#12B488]">
          <p class="title text-lg text-gray-600">
            <span class="font-semibold text-black"> Email: </span>
            {{ user?.email }}
          </p>
        </div>
        <div class="title ">
          <p class="title text-lg text-gray-600">
            <span class="font-semibold text-black">Unique ID: </span>
            {{ user?.id }}
          </p>
        </div>
        <div class="title">
          <p class="title text-lg text-gray-600">
            <span class="font-semibold text-black"> Last SignIn: </span>
            {{ user?.last_sign_in_at }}
          </p>
        </div>
        <div class="title">
          <p class="title text-lg text-gray-600">
            <span class="font-semibold text-black"> Account Created At: </span>
            {{ user?.created_at }} <br />
          </p>
        </div>
        
        <div class="title border-b-2 border-[#12B488]">
          <p class="title text-lg text-gray-600 mobile">
            <span class="font-semibold text-black"> Device Type: </span>
            <span v-if="isMobileDevice">Mobile</span>
            <span v-else>Desktop</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-center items-center" @click="toast">
    <button v-if="user" @click="client.auth.signOut()" class="button">
      <div class="flex justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm16.006 9.5H10.75a.75.75 0 0 1 0-1.5h8.256l-3.3-3.484a.75.75 0 0 1 1.088-1.032l4.5 4.75a.75.75 0 0 1 0 1.032l-4.5 4.75a.75.75 0 0 1-1.088-1.032Z"
          />
        </svg>
        &nbsp; Log out
      </div>
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
