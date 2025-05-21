import { http } from './http';
import {CalculatePriceDto} from "./dto/calculate-price.dto.ts";

export const OrderApi = {
    create(payload: CalculatePriceDto) {
        return http.post('price/calculate', payload);
    },
};
