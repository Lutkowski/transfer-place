<template>
  <div class="auth-container">
    <div class="auth-box">
      <PhoneForm v-if="!auth.isCodeSent" />
      <CodeForm v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../app/providers/auth.store";
import PhoneForm from "../features/auth/ui/PhoneForm.vue";
import CodeForm from "../features/auth/ui/CodeForm.vue";

const auth = useAuthStore();
</script>

<style scoped lang="scss">
.auth-container {
  min-height: 100vh;
  background-color: rgb(244, 247, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.auth-box {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
}
</style>
