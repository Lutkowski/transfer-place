<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '../../../app/providers/auth.store';
import { PhoneInput } from '../../../shared/ui/PhoneInput';
import { MyButton } from '../../../shared/ui/MyButton';
import {usePhoneAuthForm} from "../useAuthForm.ts";

const auth = useAuthStore();
const { phone, submittedOnce, phoneError, isPhoneValid } = usePhoneAuthForm();

const error = computed(() => auth.error);

const submit = async () => {
  submittedOnce.value = true;
  if (!isPhoneValid.value) return;
  await auth.requestCode(phone.value);
};
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <PhoneInput v-model="phone" class="auth-phone-input" />
    <p v-if="phoneError" class="error-message">{{ phoneError }}</p>

    <MyButton type="submit" :disabled="!isPhoneValid">Получить код</MyButton>
    <p v-if="error" class="error-message">{{ error }}</p>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.error-message {
  color: #e53e3e;
  font-size: 14px;
  margin-top: -0.5rem;
}
</style>
