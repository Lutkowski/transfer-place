<script setup lang="ts">
defineProps<{
  modelValue?: boolean,
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
}>()

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
};
</script>

<template>
  <input
      :id="id"
      type="checkbox"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
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
