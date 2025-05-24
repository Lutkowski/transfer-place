import { http } from './http';
import {CreateOrderDto} from "./dto/create-order.dto";
import {CalculatePriceDto} from "./dto/calculate-price.dto.ts";

export const OrderApi = {
    create(payload: CreateOrderDto) {
        return http.post('orders', payload);
    },

    calculatePrice(payload: CalculatePriceDto) {
        return http.post('price/calculate', payload);
    },
};
