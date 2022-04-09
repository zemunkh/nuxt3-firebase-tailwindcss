<template>
    <main class="profile-page">
      <section class="relative block" style="height: 500px;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1464294422770-538af108fbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2239&q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="dark:text-gray-300 text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words dark:bg-gray-800 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      src="~/assets/images/portrait.png"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style="max-width: 150px;"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0 text-center">
                    <a href="https://github.com/zemunkh">
                      <button
                        class="flex bg-indigo-500 active:bg-indigo-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;"
                      >
                        <IconUil:github class="mr-2"/>
                        Connect
                      </button>
                    </a>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide dark:text-white text-gray-700"
                        >6</span
                      ><span class="text-sm dark:text-white text-gray-500">Ongoing Projects</span>
                    </div>
                    <!-- <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide dark:text-white text-gray-700"
                        >10</span
                      ><span class="text-sm dark:text-white text-gray-500">Photos</span>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2  dark:text-white text-gray-800 mb-2"
                >
                  Munkh-Erdene Zorigbold
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2  dark:text-white text-gray-500 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg  text-gray-500"
                  ></i>
                  Ulaanbaatar, Mongolia
                </div>
                <div class="mb-2 dark:text-white text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg  text-gray-500"></i
                  >Software engineer - Nuxt 3, Vue 3, Flutter, Node, Python
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed dark:text-white text-gray-800">
                      An engineer of web and mobile application, born and raised in
                      an vast steppe of Central Asia. Pursuing an engineer
                      career over 4 years, steady learner with Master degree from South Korean
                      for new technology. Striving for the calmness in lifestyle. 
                    </p>
                    <a href="#pablo" class="font-normal text-indigo-500"
                      >Show more</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script setup>

</script>