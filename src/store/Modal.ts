import {ref} from 'vue'

type ModalState = Record<string, boolean>;

export const modalStates = ref<ModalState>({});

export const openModal = (id: string) => {
    modalStates.value[id] = true;
}

export const closeModal = (id: string) => {
    modalStates.value[id] = false;
}

export const isModalActive = (id: string) => modalStates.value[id] || false;
