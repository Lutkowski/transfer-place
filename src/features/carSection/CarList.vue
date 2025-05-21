<script setup lang="ts">

import CarCard from "../../entities/car/CarCard.vue";
import {CarsApi} from "../../shared/api/get-cars.ts";
import {onMounted, ref} from "vue";
import {ICar} from "../../entities/car/car.types.ts";


const carList = ref<ICar[]>([]);

onMounted(async () => {
  try {
    const res = await CarsApi.getAll();
    carList.value = res.data;
  } catch (e) {
    console.error("Не удалось загрузить список машин", e);
  }
});
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
