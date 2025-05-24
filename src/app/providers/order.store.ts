import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TransferType } from '../../shared/enums/transfer-type.enum';
import { CarClass } from '../../shared/enums/car-class.enum';

export const useOrderStore = defineStore('Order', () => {
    const destination = ref<TransferType>(TransferType.AIRPORT);
    const chosenCarClass = ref<CarClass>(CarClass.STANDARD);
    const withChild = ref(false);
    const withSign = ref(false);
    const hoursQuantity = ref<number>(4);

    const pickupLocation = ref('');
    const dropoffLocation = ref('');
    const pickupDate = ref('');
    const pickupTime = ref('');
    const comment = ref('');

    const name = ref('');
    const phone = ref('');
    const price = ref<number | null>(null);

    return {
        destination,
        chosenCarClass,
        withChild,
        withSign,
        hoursQuantity,
        pickupLocation,
        dropoffLocation,
        pickupDate,
        pickupTime,
        comment,
        name,
        phone,
        price,
    };
});
