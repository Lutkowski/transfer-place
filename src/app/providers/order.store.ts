import {defineStore} from "pinia";
import {ref} from "vue";
import {TransferType} from "../../shared/enums/transfer-type.enum.ts";
import {CarClass} from "../../shared/enums/car-class.enum.ts";

export const useOrderStore = defineStore('Order', () => {

    const destination = ref<TransferType>(TransferType.AIRPORT)
    const chosenCarClass = ref<CarClass>(CarClass.STANDARD)
    const withChild = ref(false)
    const withSign = ref(false)
    const hoursQuantity = ref(4);

    const details = ref('');
    const name = ref('');
    const phone = ref('');

    const setDestination = (newDestination: TransferType) => {
        destination.value = newDestination
    }


    return {destination, chosenCarClass, withChild, withSign, hoursQuantity, details, name, phone, setDestination}
})
