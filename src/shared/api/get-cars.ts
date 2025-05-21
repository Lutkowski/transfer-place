import { http } from './http';
import {ICar} from "../../entities/car/car.types.ts";

export const CarsApi = {
    getAll(): Promise<{ data: ICar[] }> {
        return http.get('/cars');
    },
};
