<template>
  <div>
    <loader :isLoading="isActive"/>
    <ErrorMsg header="New product" :errMessage="store.error"></ErrorMsg>
    <Form @submit="addProduct">
      <FormField label="Name" name="name" type="text" v-model="product.name" rules="required|min:2" />
      <FormField label="Price" name="price" type="number" v-model="product.price" rules="required" />
      <br>
      <Button type="submit" buttonType="blue">Add</Button>
    </Form>
  </div>
</template>


<script setup>
  import { useStore } from '~/store/store'
  import Loader from '~/components/Tools/Loader'
  import ErrorMsg from "~/components/Tools/ErrorMsg";
  import FormField from "~/components/Forms/FormField/FormField";
  import { Form } from 'vee-validate';
  
  const store = useStore();

  const isActive = ref(false)
  const product = reactive({
    active: false,
    fnac: false,
    vatRate: 10,
    name: '',
    price: 0,
    category: '',
    program: ''
  })

  const addProduct = async () => {
    isActive.value = true
    alert('Adding')
    isActive.value = false
  }
</script>