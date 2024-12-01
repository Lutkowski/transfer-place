import {ref} from 'vue'

export enum Transfer {
    AIRPORT = "Трансфер Аэропорт",
    RAILWAY_STATION = "Трансфер ЖД Вокзал",
    ADDRESS = "С адреса на адрес",
    INTERCITY = "Междугородние поездки",
    RENT = "Аренда с водителем",
}

const backgroundPath = '/transferBackground';
export const transferImageURL: Record<Transfer, string> = {
    [Transfer.AIRPORT]: `${backgroundPath}/airport.jpg`,
    [Transfer.RAILWAY_STATION]: `${backgroundPath}/station.png`,
    [Transfer.ADDRESS]: `${backgroundPath}/address.png`,
    [Transfer.INTERCITY]: `${backgroundPath}/intercity.png`,
    [Transfer.RENT]: `${backgroundPath}/rent.png`,
};

interface OrderFormState {
    destination: string;
    imageUrl: string;
}

export const orderFormState = ref<OrderFormState>({
    destination: Transfer.AIRPORT,
    get imageUrl() {
        return transferImageURL[this.destination];
    },
});
