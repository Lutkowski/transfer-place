import { defineStore } from 'pinia';
import { ref } from 'vue';
import { OrderApi } from '../../shared/api/order.api';
import { UpdateOrderDto } from '../../shared/api/dto/update-order.dto';
import {Order} from "../../shared/types/order";

export const useMyOrdersStore = defineStore('myOrders', () => {
    const orders = ref<Order[]>([]);
    const isLoading = ref(false);
    const error = ref('');

    const fetchMyOrders = async () => {
        isLoading.value = true;
        error.value = '';
        try {
            const response = await OrderApi.getMyOrders();
            orders.value = response.data;
        } catch (e) {
            error.value = 'Не удалось загрузить ваши заявки.';
        } finally {
            isLoading.value = false;
        }
    };

    const updateOrder = async (orderId: number, payload: UpdateOrderDto) => {
        try {
            const response = await OrderApi.updateMyOrder(orderId, payload);
            const index = orders.value.findIndex((o) => o.id === orderId);
            if (index !== -1) {
                orders.value[index] = response.data;
            }
        } catch (e) {
            console.error(`Ошибка при обновлении заказа #${orderId}`, e);
            throw new Error('Ошибка при обновлении заказа');
        }
    };

    return {
        orders,
        isLoading,
        error,
        fetchMyOrders,
        updateOrder,
    };
});
