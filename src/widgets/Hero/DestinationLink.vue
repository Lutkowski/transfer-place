<script setup lang="ts">
import arrow from "/icons/arrow.svg"
import {IDestination} from "./DestinationLink.types.ts";
import {useOrderStore} from "../../app/providers/order.store.ts";

const {destination} = defineProps<{
  destination: IDestination
}>()

const {setDestination} = useOrderStore();
</script>

<template>
  <a href="#order-form" @click="setDestination(destination.destination)">
    <span>{{ destination.text }}</span>
    <img :src="arrow" alt="стрелочка"/>
  </a>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
