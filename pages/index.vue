<template>
  <PageWrapper class="flex justify-center items-center">

    <div class="flex flex-col z-10">
      <h1 class="text-center">
        <span
          v-for="(item, i) in $t('pages.index.title').split(',')"
          :key="i"
          class="linear-wipe-text drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-bold uppercase"
        >
          {{ item }}
        </span>
      </h1>

      <div class="flex space-x-4 justify-center mt-10">
        <ThemeToggle />
        <Button
          size="lg"
          text="Nuxt 3"
          class="font-extrabold"
          href="https://v3.nuxtjs.org"
        />
        <Button
          size="lg"
          text="Github"
          type="secondary"
          class="font-extrabold"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import ThemeToggle from '~~/components/ThemeToggle.vue'

definePageMeta({
  layout: 'page',
})
</script>

<style lang="scss">
.linear-wipe-text {
  $color1: theme('colors.blue.500');
  $color2: theme('colors.purple.500');
  background: linear-gradient(
    to right,
    $color1 20%,
    $color2 40%,
    $color2 60%,
    $color1 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s ease infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
</style>
