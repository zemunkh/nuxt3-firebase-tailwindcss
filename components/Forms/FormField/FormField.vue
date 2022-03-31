<template>
  <div class="">
    <p class="block dark:text-white text-gray-700 text-sm font-bold mb-2">{{ label }}</p>
    <Field
      :name="name"
      :modelValue="modelValue"
      @input="$emit('modelUpdate', $event)"
      :id="name"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      v-bind="$attrs"
    />
    <ErrorMessage :name="name" class="flex text-red-500" />
  </div>
</template>
<script setup>
  import { ErrorMessage, Field } from 'vee-validate';
  defineProps({
    name: { type: String, required: true },
    label: { type: String, default: '' },
    modelValue: { type: [String, Number], default: '' }
  })
</script>