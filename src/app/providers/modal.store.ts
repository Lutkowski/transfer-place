import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {ModalType} from "../../shared/Modal/Modal.types.ts";

export const useModalStore = defineStore('Modal', () => {
    const openedModalId: Ref<ModalType | null> = ref(null);

    const openModal = (id: ModalType) => {
        openedModalId.value = id
    }

    const closeModal = () => {
        openedModalId.value = null
    }

    return {openedModalId, openModal, closeModal}
})
