<script setup lang="ts">

import CarList from "./CarList.vue";
</script>

<template>
  <section id="autopark">
    <header>
      <div class="section-header">
      <h2>Автомобили</h2>
      <span>Оплачивайте поездки онлайн</span>
      </div>
    </header>
  <CarList/>
  </section>
</template>

<style scoped lang="scss">
section{
  @include container();
  margin-top:$section-margin;
  height: auto;
}
.section-header{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h2{
    flex-grow:1;
  }
  span{
    line-height: 33px;
    font-size:22px;
    font-weight: $font-weight-header;
    justify-self: flex-end;
    white-space: nowrap;
  }
}
</style>
