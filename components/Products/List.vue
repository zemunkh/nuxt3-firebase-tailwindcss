<template>
  <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
    <Loader :isLoading="pending"/>
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div v-for="product in store.products" class="w-full sm:w-1/2 md:w-1/2 p-4">
          <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div class="relative pb-48 overflow-hidden">
              <img class="absolute inset-0 h-full w-full object-cover" :src="product.image" alt="">
            </div>
            <div class="p-4">
              <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
              <h2 class="mt-2 mb-2  font-bold">{{ product.name }}</h2>
              <p class="text-sm">{{ product.description }}</p>
              <div class="mt-3 flex items-center">
                <span class="text-sm font-semibold">ab</span>&nbsp;<span class="font-bold text-xl">{{ product.price }}</span>&nbsp;<span class="text-sm font-semibold">€</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup>
  import { useStore } from "~/store/store";
  import Loader from '~/components/Tools/Loader'
  const store = useStore();

  const { pending, data: items } = useLazyAsyncData('products', () =>
    store.list('products', [['active', '==', true]], null, 50)
  );

</script>