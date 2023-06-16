<template>
  <div><div>
      <VOnboardingWrapper ref="wrapper" :steps="steps">
        <template #default="{ previous, next, step, exit, isFirst, isLast, index }">
          <VOnboardingStep>
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                  <div v-if="step.content">
                    <h3 v-if="step.content.title" class="text-lg font-medium leading-6 text-gray-900">{{ step.content.title }}</h3>
                    <div v-if="step.content.description" class="mt-2 max-w-xl text-sm text-gray-500">
                      <p>{{ step.content.description }}</p>
                    </div>
                  </div>
                  <div class="mt-5 space-x-4 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center relative">
                    <span class="absolute right-0 bottom-full mb-2 mr-2 text-gray-600 font-medium text-xs">{{ `${index + 1}/${steps.length}` }}</span>
                    <template v-if="!isFirst">
                      <button @click="previous" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 font-medium text-yellow-700 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm button">Previous</button>
                    </template>
                    <button @click="next" type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm button">{{ isLast ? 'Finish' : 'Next' }}</button>
                  </div>
                </div>
              </div>
            </div>
          </VOnboardingStep>
        </template>
      </VOnboardingWrapper>
      <div class="flex flex-row  justify-center items-center">
        <button @click="start" class="button font-semibold">Onboard</button>
        <!-- <button @click="finish">Finish Onboarding</button> -->
      </div>
    </div>
    <div class="bg-gray-50">
      <section class="pt-12 pb-12 sm:pb-16 lg:pt-8" id="foo">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16"
          >
            <div>
              <div class="text-center lg:text-left">
                <h1
                  class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj"
                >
                  Unleash Your Inner Fashionista
                </h1>
                <p class="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vehicula massa in enim luctus. Rutrum arcu.
                </p>

                <form action="#" method="POST" class="mt-8 sm:mt-10">
                  <div
                    class="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900"
                  >
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email address"
                      class="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                    />
                    <div
                      class="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2"
                    >
                      <button
                        type="submit"
                        class="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-[#111827] rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-[#12b488]"
                      >
                        Get Discount
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                class="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8"
              >
                <div class="flex items-center">
                  <p
                    class="text-3xl font-medium text-gray-900 sm:text-4xl font-pj"
                  >
                    1500+
                  </p>
                  <p class="ml-3 text-sm text-gray-900 font-pj">
                    Products<br />Delivered
                  </p>
                </div>

                <div class="hidden sm:block">
                  <svg
                    class="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.72265"
                      y1="10.584"
                      x2="15.7226"
                      y2="0.583975"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="17.584"
                      x2="15.7226"
                      y2="7.58398"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="24.584"
                      x2="15.7226"
                      y2="14.584"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="31.584"
                      x2="15.7226"
                      y2="21.584"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="38.584"
                      x2="15.7226"
                      y2="28.584"
                    ></line>
                  </svg>
                </div>

                <div class="flex items-center">
                  <p
                    class="text-3xl font-medium text-gray-900 sm:text-4xl font-pj"
                  >
                    $1M+
                  </p>
                  <p class="ml-3 text-sm text-gray-900 font-pj">
                    Transaction<br />Completed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                class="w-full"
                src="https://fpdl.in/uploads/20230614200700_[fpdl.in]_women-character-shopping-banner-simple-design_618890-288_normal.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Featured id="bar"/>
  <Review id="rev"/>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
[data-v-onboarding-wrapper] [data-popper-arrow]::before {
    content: '';
    background: var(--v-onboarding-step-arrow-background, white);
    top: 0;
    left: 0;
    transition: transform 0.2s ease-out,visibility 0.2s ease-out;
    visibility: visible;
    transform: translateX(0px) rotate(45deg);
    transform-origin: center;
    width: var(--v-onboarding-step-arrow-size, 10px);
    height: var(--v-onboarding-step-arrow-size, 10px);
    position: absolute;
    z-index: -1;
  }
  
  [data-v-onboarding-wrapper] [data-popper-placement^='top'] > [data-popper-arrow] {
    bottom: 5px;
  }
  
  [data-v-onboarding-wrapper] [data-popper-placement^='right'] > [data-popper-arrow] {
    left: -4px;
  }
  
  [data-v-onboarding-wrapper] [data-popper-placement^='bottom'] > [data-popper-arrow] {
    top: -4px;
  }
  
  [data-v-onboarding-wrapper] [data-popper-placement^='left'] > [data-popper-arrow] {
    right: -4px;
  }
</style>
<script>
 import { defineComponent, ref } from 'vue'
  import { VOnboardingWrapper, VOnboardingStep, useVOnboarding } from 'v-onboarding'
  export default defineComponent ({
    components: {
      VOnboardingWrapper,
      VOnboardingStep
    },
    setup() {
      const wrapper = ref(null)
      const { start, goToStep, finish } = useVOnboarding(wrapper)
      const steps = [
        {
          attachTo: { element: '#foo' },
          content: { title: "Discount Section!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
        },
        {
          attachTo: { element: '#bar' },
          content: {
            title: "Featured Items",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }

        },
        {
          attachTo: { element: '#rev' },
          content: {
            title: "Review Section",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }

        }
      ]
  
      return {
        wrapper,
        steps,
        start,
        finish,
        goToStep
      }
    }
  })
  
</script>