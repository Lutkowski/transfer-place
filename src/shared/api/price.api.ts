import { http } from './http';
import {CalculatePriceDto} from "./dto/calculate-price.dto";

export const OrderApi = {
    create(payload: CalculatePriceDto) {
        return http.post('price/calculate', payload);
    },
};
