<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  name?: string;
  id?: string;
  min: number;
  max: number;
  step?: number;
}>();

const modelValue = defineModel<number>();

const tooltipPosition = computed(() => {
  const range = props.max - props.min + 1;
  return (modelValue.value - props.min) * (100 / range);
});
</script>

<template>
  <div class="range-wrapper">
    <!-- Прямоугольник с текущим значением -->
    <div class="tooltip" :style="{ left: 2.75 + tooltipPosition + '%' }">
      <div class="tooltip-box">
        {{ modelValue }}
      </div>
    </div>

    <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :name="name"
        :id="id"
        v-model="modelValue"
    />

    <div class="range-labels">
      <span>{{ min }}</span>
      <span>{{ max }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.range-wrapper {
  position: relative;
  width: 100%;
  margin-top: 40px;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  border: none;

  &::-webkit-slider-runnable-track {
    height: 4px;
    background: #dcdcdc;
    border-radius: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    background: #000;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    top: -6px;
  }
}

.tooltip {
  position: absolute;
  top: -10px;
  transform: translateX(-50%);
}

.tooltip-box {
  background: white;
  color: #333;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 14px;
  color: #6a6a6a;
}
</style>
