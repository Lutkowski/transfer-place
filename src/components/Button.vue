<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset';
  classes?: string | string[];
}>();
</script>

<template>
  <button :type="type || 'button'" :class="['my-button', classes]">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
.my-button {
  font-size: 14px;
  font-weight: $font-weight-header;
  color: $secondary-color;
  background-color: $light-blue-background;
  height: 4rem;
  border-radius: 4rem;
}
</style>
