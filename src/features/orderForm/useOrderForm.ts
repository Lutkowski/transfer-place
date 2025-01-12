import {computed, ref} from "vue";
import {useOrderStore} from "../../app/providers/order.store";
import {Destinations} from "../../entities/destination/destination.types";
import {carClassPrices} from "../../entities/car/car.types";

export const useOrderForm = () => {
    const orderStore = useOrderStore();

    const basePrice = ref(0);

    const withSignPrice = 500;
    const withChildPrice = 300;

    const totalPrice = computed(() => {
        let total = basePrice.value + carClassPrices[orderStore.chosenCarClass][orderStore.destination];
        if (orderStore.destination === Destinations.RENT) {
            total *= orderStore.hoursQuantity;
        }
        if (orderStore.withChild) total += withChildPrice;
        if (orderStore.withSign) total += withSignPrice;
        return total;
    });

    return {totalPrice}
}
