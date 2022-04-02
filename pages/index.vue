<template>
  <PageWrapper class="flex justify-center items-center">
    <Landing />
  </PageWrapper>
</template>

<script lang="ts" setup>
import Landing from '~~/components/Landing.vue';

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
