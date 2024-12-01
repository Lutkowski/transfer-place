<script setup lang="ts">
import arrow from "/icons/arrow.svg"
import {orderFormState, Transfer} from "../store/orderForm.ts";

defineProps<{
  destination: Transfer;
  text: string;
}>()
</script>

<template>
  <a href="#order-form" @click="orderFormState.destination = destination">
    <span>{{ text }}</span>
    <img :src="arrow" alt="стрелочка"/>
  </a>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
