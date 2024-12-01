<script setup lang="ts">

import {DefineComponent} from "vue";

export interface NavbarComponent {
  component: string | DefineComponent<any, any, any>; // Разрешаем строки или Vue-компоненты
  props?: Record<string, unknown>; // Свойства компонента
}

defineProps<{
  items: (string | NavbarComponent)[],
  classes?: string | string[],
  liClasses?: string | string[],
}>();
</script>

<template>
  <ul :class=[classes]>
    <li :class=[liClasses] v-for="(item, index) in items" :key="index">
      <slot :item="item" :index="index">
        <span v-if="typeof item === 'string'" v-html="item"></span>
        <component v-else :is="item.component" v-bind="item.props"></component>
      </slot>
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding-left: 0;
  display: flex;
  justify-content: space-between;
}


@media (max-width: 768px) {
  .hero-navbar li{
    margin-top: 1rem;
  }
}
</style>
