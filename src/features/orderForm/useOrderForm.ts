import {computed, ref} from "vue";
import {useOrderStore} from "../../app/providers/order.store";
import {carClassPrices} from "../../entities/car/car.types";
import {TransferType} from "../../shared/enums/transfer-type.enum.ts";

export const useOrderForm = () => {
    const orderStore = useOrderStore();

    const basePrice = ref(0);

    const withSignPrice = 500;
    const withChildPrice = 300;

    const totalPrice = computed(() => {
        let total = basePrice.value + carClassPrices[orderStore.chosenCarClass][orderStore.destination];
        if (orderStore.destination === TransferType.RENT_WITH_DRIVER) {
            total *= orderStore.hoursQuantity;
        }
        if (orderStore.withChild) total += withChildPrice;
        if (orderStore.withSign) total += withSignPrice;
        return total;
    });

    return {totalPrice}
}
