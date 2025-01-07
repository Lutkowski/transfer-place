<script setup lang="ts">
const modelValue = defineModel();
</script>

<template>
  <vue-tel-input
      :inputOptions="{ placeholder: '999-999-99-99'}"
      :default-country="'RU'"
      v-model="modelValue"
  ></vue-tel-input>
</template>

<style scoped lang="scss">
.my-vue-tel-input, .my-vue-tel-input input::placeholder {
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
}
</style>
