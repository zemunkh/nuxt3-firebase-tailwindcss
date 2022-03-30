<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <h2 class="mt-6 text-center text-2xl font-bold text-sky-400/100">
        {{ store.nick }}
      </h2>
      <img class="mx-auto h-24 w-auto" src="~/assets/images/profile.png" alt="Profile">
      <h2 class="mt-6 text-center text-6xl font-extrabold dark:text-white">
        {{ store.counter }}
      </h2>
      <div class="flex rounded-lg divide-x border-4 border-amber-300  divide-gray-200  shadow sm:flex dark:divide-gray-700">
        <li class="w-full list-none">
          <button
            class="inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            @click="increment()"
            >
            +
          </button>
        </li>
        <li class="w-full list-none">
          <button
            href="#"
            class="inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            @click="decrement()"
          >
          -
          </button>
        </li>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from '~/stores/store'

  const store = useStore()
  const increment = () => store.increment()
  const decrement = () => store.decrement()
</script>