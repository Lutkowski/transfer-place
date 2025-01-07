<script setup lang="ts">
const {isActive} = defineProps<{
  isActive: boolean;
}>()
</script>

<template>
  <svg class="cross-icon" :class="{ active: isActive }" role="presentation" focusable="false" viewBox="0 0 40 40"
       xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="20" cy="20" r="20" stroke-width="0" fill="none"></circle>
    <g class="cross" stroke-width="2" fill="none">
      <path d="M9 20H31"></path>
      <path d="M20 9V31"></path>
    </g>
  </svg>
</template>

<style scoped lang="scss">
.cross-icon {
  .cross path {
    stroke: black;
    transition: stroke 0.3s ease, transform 0.3s ease;
    transform-origin: 20px 20px;
  }

  &:hover {
    circle {
      fill: blue;
    }

    .cross path {
      stroke: white;
    }
  }

  &.active {
    .cross path {
      transform: rotate(45deg);
    }
  }
}
</style>
