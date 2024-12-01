<script setup lang="ts">

import CarCard from "./CarCard.vue";

const carPath = "/cars"

const carList = [
  {
    img: {
      src: `${carPath}/standartCar.png`,
      alt: "Toyota Corolla",
    },
    carClass: "СТАНДАРТ",
    title: "Toyota Corolla, KIA Cerato",
    placeNumber: 3,
  },
  {
    img: {
      src: `${carPath}/comfortCar.png`,
      alt: "Toyota Camry",
    },
    carClass: "КОМФОРТ",
    title: "Toyota Camry, KIA Optima",
    placeNumber: 3,
  },
  {
    img: {
      src: `${carPath}/businessCar.png`,
      alt: "Mercedes E-class",
    },
    carClass: "БИЗНЕС",
    title: "Mercedes E-class",
    placeNumber: 3,
  },
  {
    img: {
      src: `${carPath}/miniwanCar.png`,
      alt: "VW Caravelle",
    },
    carClass: "МИНИВЭН",
    title: "VW Caravelle, Hyundai H1",
    placeNumber: 6,
  },
];

</script>

<template>
  <ul>
    <li v-for="({img,carClass,title,placeNumber},index) in carList" :key="index">
      <CarCard :title="title" :img="img" :car-class="carClass" :place-number="placeNumber"></CarCard>
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
