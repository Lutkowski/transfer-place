<script setup lang="ts">
import { onMounted } from 'vue';
import { useMyOrdersStore } from '../app/providers/my-order.store';
import PageHeader from "../shared/ui/Header/PageHeader.vue";

const store = useMyOrdersStore();

onMounted(() => {
  store.fetchMyOrders();
});
</script>

<template>
  <PageHeader />
  <section class="my-orders-section">
    <h2 class="section-title">Мои заявки</h2>

    <p v-if="store.isLoading" class="text-muted">Загрузка...</p>
    <p v-if="store.error" class="text-red-600">{{ store.error }}</p>

    <div v-if="store.orders.length" class="orders-list">
      <div
          v-for="order in store.orders"
          :key="order.id"
          class="order-card"
      >
        <div class="order-header">
          <span class="order-destination">{{ order.destination.name }}</span>
          <span class="order-status">{{ order.status }}</span>
        </div>
        <div class="order-body">
          <div class="order-locations">
            {{ order.pickupLocation }} → {{ order.dropoffLocation }}
          </div>
          <div class="order-datetime">
            {{ order.pickupDate }} в {{ order.pickupTime }}
          </div>
          <div class="order-price">
            {{ order.price ? order.price + ' ₽' : '—' }}
          </div>
        </div>
      </div>
    </div>

    <p v-else-if="!store.isLoading" class="text-muted">Заявок пока нет</p>
  </section>
</template>

<style scoped>
.my-orders-section {
  background-color: #f3f6fc;
  padding: 2rem;
  border-radius: 12px;
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.text-muted {
  color: #6b7280;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.order-card {
  background-color: white;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #3b82f6;
  transition: box-shadow 0.2s;
}

.order-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.order-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 0.5rem;
}

.order-destination {
  color: #111827;
}

.order-status {
  background-color: #e0e7ff;
  color: #3730a3;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 13px;
}

.order-body {
  font-size: 15px;
  color: #374151;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
}

.order-datetime,
.order-price {
  white-space: nowrap;
}
</style>
