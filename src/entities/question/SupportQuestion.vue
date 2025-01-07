<script setup lang="ts">
import {ref} from "vue";
import {ToggleIcon} from "../../shared/ui/ToggleIcon";

defineProps<{
  question: string;
  answer: string;
}>();

const isOpen = ref<boolean>(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li>
    <div>
      <header @click="toggleOpen">
        <h3>{{ question }}</h3>
        <ToggleIcon :is-active="isOpen"></ToggleIcon>
      </header>
    </div>
    <div class="content" :class="{'visible': isOpen }">
      <p v-html="answer"></p>
    </div>
  </li>
</template>

<style scoped lang="scss">
header {
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
</style>
