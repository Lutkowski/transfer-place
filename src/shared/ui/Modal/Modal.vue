<script setup lang="ts">
import {useModalStore} from "../../../app/providers/modal.store.ts";
import {ModalType} from "./Modal.types.ts";

const props = defineProps<{
  id: ModalType;
  classes?: string | string[];
}>();


const modalStore = useModalStore();
</script>

<template>
  <div v-if="modalStore.openedModalId && props.id === modalStore.openedModalId"
       class="modal-container"
       @click="modalStore.closeModal()">
    <div :class="['modal-content',classes]" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-container {
  padding: 5vh 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  display: flex;
  flex-direction: column;

  overflow: auto;
  text-align: center;
  background-color: white;
  min-height: 40vh;
  height: auto;
  max-height: 90vh;
  min-width: 30vw;
  max-width: 80vw;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
