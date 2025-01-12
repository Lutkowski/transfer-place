import {defineStore} from "pinia";
import {ref} from "vue";
import {carClass} from "../../entities/car/car.types";
import {Destinations} from "../../entities/destination/destination.types";

export const useOrderStore = defineStore('Order', () => {

    const destination = ref<Destinations>(Destinations.AIRPORT)
    const chosenCarClass = ref(carClass.STANDART)
    const withChild = ref(false)
    const withSign = ref(false)
    const hoursQuantity = ref(4);

    const details = ref('');
    const name = ref('');
    const phone = ref('');

    const setDestination = (newDestination: Destinations) => {
        destination.value = newDestination
    }


    return {destination, chosenCarClass, withChild, withSign, hoursQuantity, details, name, phone, setDestination}
})
