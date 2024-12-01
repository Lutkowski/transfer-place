<script setup lang="ts">
defineProps({
  classes: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <a :class="['phone', classes ]" href="tel:89315213066">8 (931) 521-30-66</a>
</template>

<style scoped>
</style>
