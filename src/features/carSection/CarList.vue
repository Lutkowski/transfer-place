<script setup lang="ts">

import CarCard from "../../entities/car/CarCard.vue";
import {carList} from "../../shared/mocks/carsMock.ts";
</script>

<template>
  <ul>
    <li v-for="(car,index) in carList" :key="index">
      <CarCard :car="car"></CarCard>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  flex-wrap: wrap;
}


@media (max-width: 768px) {
  ul {
    justify-content: center;
    gap: 10px;
  }
}
</style>
