<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import {useAuthStore} from "../../../app/providers/auth.store";

const auth = useAuthStore();
const { phone } = storeToRefs(auth);

onMounted(() => {
  auth.initFromStorage();
});
</script>

<template>
  <header class="page-header">
    <RouterLink to="/" class="logo">
      <img src="/logo.svg" alt="Логотип" />
      <span class="logo-text">transfer<br />place</span>
    </RouterLink>

    <div class="nav-actions">
      <a class="phone" href="tel:89315213066">8 (931) 521-30-66</a>
      <RouterLink
          :to="phone ? '/account' : '/auth'"
          class="account-link"
      >
        {{ phone ? 'Мои заказы' : 'Войти' }}
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}

.logo img {
  width: 42px;
  height: 42px;
}

.logo-text {
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1rem;
  font-size: 14px;
}

.nav-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.phone {
  font-weight: 500;
  font-size: 14px;
  color: #111827;
  white-space: nowrap;
  text-decoration: none;
}

.account-link {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #3b82f6;
}
</style>
