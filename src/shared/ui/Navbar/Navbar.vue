<script setup lang="ts">
</script>

<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<style scoped>
ul {
  padding-left: 0;
  display: flex;
  justify-content: space-between;
}


@media (max-width: 768px) {
  .hero-navbar li {
    margin-top: 1rem;
  }
}
</style>
