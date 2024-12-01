<script setup lang="ts">
import {ref} from "vue";

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

defineProps<{
  classes?: string | string[],
  question: string;
  answer: string;
}>();
</script>

<template>
  <li :class="[classes]">
    <div>
      <header @click="toggleOpen">
        <h3>{{ question }}</h3>
        <svg class="cross-icon" role="presentation" focusable="false" viewBox="0 0 40 40"
             xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <circle cx="20" cy="20" r="20" stroke-width="0"></circle>


          <g class="cross" stroke-width="2" fill="none">
            <path d="M9 20H31"></path>
            <path d="M20 9V31"></path>
          </g>
        </svg>
      </header>
    </div>
    <div class="content" :class="{ 'visible': isOpen }">
      <p v-html="answer"></p>
    </div>
  </li>
</template>

<style scoped lang="scss">
header{
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
h3 {
  color: rgb(13, 13, 13);
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 25px;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease, padding 1s ease;
  padding: 0;

  &.visible {
    max-height: 300px;
    padding: 10px 0;
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }
}

.cross-icon circle {
  fill: transparent;
  transition: fill 0.3s ease;
}

.cross-icon .cross path {
  stroke: black;
  transition: stroke 0.3s ease, transform 0.3s ease;
  transform-origin: 20px 20px;
}

.cross-icon:hover circle {
  fill: blue;
}

.cross-icon:hover .cross path {
  stroke: white;
  transform: rotate(45deg);
}
</style>
