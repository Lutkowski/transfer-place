<template>
  <form @submit.prevent="submit" class="form">
    <label>
      <input v-model="code" placeholder="Код из SMS" />
    </label>
    <button :disabled="loading">
      {{ loading ? 'Проверка...' : 'Войти' }}
    </button>
  </form>

  <Modal :id="ModalType.AuthSuccess">
    <div class="modal-inner">
      <h2>Вы успешно авторизованы 🎉</h2>
      <p>Сейчас вы будете перенаправлены на главную</p>
    </div>
  </Modal>

  <Modal :id="ModalType.AuthError">
    <div class="modal-inner">
      <h2>Ошибка</h2>
      <p>Неверный код подтверждения. Попробуйте ещё раз.</p>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../../app/providers/auth.store';
import { useModalStore } from '../../../app/providers/modal.store';
import { Modal } from '../../../shared/ui/Modal';
import { ModalType } from '../../../shared/ui/Modal/Modal.types';

const code = ref('');
const auth = useAuthStore();
const router = useRouter();
const modalStore = useModalStore();

const loading = computed(() => auth.isLoading);

const submit = async () => {
  await auth.verifyCode(code.value);

  if (!auth.error) {
    modalStore.openModal(ModalType.AuthSuccess);
    setTimeout(() => {
      modalStore.closeModal();
      router.push('/');
    }, 2000);
  } else {
    modalStore.openModal(ModalType.AuthError);
  }
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  background: white;
  border: 1px solid rgb(202, 210, 233);
  border-radius: 6px;
  height: 3rem;
  padding: 0 1rem;
  font-size: 16px;
}

button {
  background-color: rgb(44, 118, 239);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background-color: rgb(30, 90, 200);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}

.modal-inner {
  text-align: center;

  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    color: #555;
  }
}
</style>
