import { http } from './http';
import { CreateOrderDto } from './dto/create-order.dto';
import {UpdateOrderDto} from "./dto/update-order.dto.ts";

export const OrderApi = {
    create(payload: CreateOrderDto) {
        return http.post('/orders', payload);
    },

    calculatePrice(payload: CreateOrderDto) {
        return http.post('/price/calculate', payload);
    },

    getMyOrders() {
        return http.get('/orders/my');
    },

    updateMyOrder(id: number, payload: UpdateOrderDto) {
        return http.put(`/orders/${id}`, payload);
    },
};
