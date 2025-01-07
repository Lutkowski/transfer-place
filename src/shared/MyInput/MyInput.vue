<script setup lang="ts">
defineProps<{
  name?: string;
  placeholder?: string;
  id?: string;
}>()

const modelValue = defineModel()

</script>

<template>
  <input
      :id="id"
      type="text"
      :placeholder="placeholder"
      :name="name"
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
