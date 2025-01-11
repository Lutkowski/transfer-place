<script setup lang="ts">
import arrow from "/icons/arrow.svg"
import {orderFormState} from "../../store/orderForm.ts";
import {IDestination} from "./DestinationLink.types.ts";

const {destination} = defineProps<{
  destination: IDestination
}>()
</script>

<template>
  <a href="#order-form" @click="orderFormState.destination = destination.destination">
    <span>{{ destination.text }}</span>
    <img :src="arrow" alt="стрелочка"/>
  </a>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
