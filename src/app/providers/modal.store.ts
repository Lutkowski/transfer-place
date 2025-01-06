import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {ModalType} from "../../shared/modal/modal.types.ts";

export const useModalStore = defineStore('modal', () => {
    const openedModalId: Ref<ModalType | null> = ref(null);

    const openModal = (id: ModalType) => {
        openedModalId.value = id
    }

    const closeModal = () => {
        openedModalId.value = null
    }

    return {openedModalId, openModal, closeModal}
})
