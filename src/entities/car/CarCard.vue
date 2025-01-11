<script setup lang="ts">
import sitIcon from "/icons/sit.svg"
import {ICar} from "./car.types.ts";

const {car} = defineProps<{
  car: ICar;
}>();
</script>

<template>
  <div class="car-card">
    <img :src="car.img.src" :alt="car.img.alt">
    <div class="car-info">
      <h3>{{ car.carClass }}</h3>
      <p>{{ car.title }}</p>
      <div class="car-place">
        <img :src="sitIcon" alt="иконка сидения"/>
        <span>Кол-во мест: {{ car.placeNumber }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.car-card {
  width: 260px;
  height: 174px;
  background-color: $secondary-color;
  border-radius: 1rem;
  line-height: 33px;
  font-size: 16px;
  position: relative;
  margin-top: 4rem;

  .car-info {
    @include flex-center;
    flex-direction: column;
    max-height: 80%;
    width: 100%;
    position: absolute;
    bottom: 20px;
  }

  > img {
    width: 200px;
    height: 125px;
    position: absolute;
    top: -40%;
    left: 10%;
  }

  > img:hover {
    transform: translateY(-5px);
    transition: all 1s ease;
  }

  .car-place {
    @include flex-center;
    font-size: 13px;
    color: rgb(175, 175, 175);
  }

  .car-place > :nth-child(1) {
    margin-right: 5px;
  }
}
</style>
