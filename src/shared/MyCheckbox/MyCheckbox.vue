<script setup lang="ts">
const modelValue = defineModel<boolean>()
</script>

<template>
  <input
      type="checkbox"
      v-model="modelValue"
  />
</template>

<style scoped lang="scss">
input {
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  color: rgb(106, 106, 106)
}
</style>
