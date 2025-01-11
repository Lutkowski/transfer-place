<script setup lang="ts">

import {ButtonLabel} from "../../shared/ui/ButtonLabel";
import {IMessenger} from "./Messenger.types.ts";

const {messenger, isActive} = defineProps<{ messenger: IMessenger, isActive: boolean }>();

const emit = defineEmits(['hover', 'leave'])
</script>

<template>
  <ButtonLabel v-if="isActive" class="messenger-icon-label">{{ messenger.name }}</ButtonLabel>
  <a @mouseover="$emit('hover', messenger.name)" @mouseleave="$emit('leave', messenger.name)" :href="messenger.link"
     target="_blank">
    <component :is="messenger.icon"/>
  </a>
</template>

<style scoped lang="scss">

</style>
