<script setup lang="ts">
defineProps<{
  modelValue?: string,
  name?: string;
  placeholder?: string;
  id?: string;
}>()

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  emit("update:modelValue", value);
};
</script>

<template>
  <input
      :id="id"
      type="text"
      :placeholder="placeholder"
      :name="name"
      :value="modelValue"
      @input="handleInput"
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
