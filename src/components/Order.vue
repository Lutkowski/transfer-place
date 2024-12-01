<script setup lang="ts">
import OrderForm from "./OrderForm.vue";
</script>

<template>
  <section id="order">
    <OrderForm/>
  </section>
</template>

<style scoped lang="scss">
section {
  @include container();
  margin-top: 5rem;
}

</style>
