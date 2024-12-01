<script setup lang="ts">
defineProps<{
  modelValue: string;
  classes?: string | string[];
}>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value)
  emit("update:modelValue", target.value);
};
</script>

<template>
  <vue-tel-input
      :class="['my-vue-tel-input', ...(Array.isArray(classes) ? classes : [classes])]"
      :inputOptions="{ placeholder: '999-999-99-99'}"
      :default-country="'RU'"
      @input="handleInput"
  ></vue-tel-input>
</template>

<style scoped lang="scss">
.my-vue-tel-input, .my-vue-tel-input input::placeholder {
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
}
</style>
