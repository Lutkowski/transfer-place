import {CarClass} from "../../shared/enums/car-class.enum.ts";
import {TransferType} from "../../shared/enums/transfer-type.enum.ts";

export interface ICar {
    img: {
        src: string;
        alt: string;
    };
    carClass: string;
    title: string;
    placeNumber: number;
}

export const carClassPrices = {
    [CarClass.STANDARD]: {
        [TransferType.AIRPORT]: 1200,
        [TransferType.RAILWAY]: 800,
        [TransferType.ADDRESS_TO_ADDRESS]: 800,
        [TransferType.RENT_WITH_DRIVER]: 1000
    },
    [CarClass.COMFORT]: {
        [TransferType.AIRPORT]: 2500,
        [TransferType.RAILWAY]: 1500,
        [TransferType.ADDRESS_TO_ADDRESS]: 1500,
        [TransferType.RENT_WITH_DRIVER]: 1500
    },
    [CarClass.BUSINESS]: {
        [TransferType.AIRPORT]: 6000,
        [TransferType.RAILWAY]: 4000,
        [TransferType.ADDRESS_TO_ADDRESS]: 4000,
        [TransferType.RENT_WITH_DRIVER]: 2000
    },
    [CarClass.MINIVAN]: {
        [TransferType.AIRPORT]: 4500,
        [TransferType.RAILWAY]: 3000,
        [TransferType.ADDRESS_TO_ADDRESS]: 3000,
        [TransferType.RENT_WITH_DRIVER]: 1500
    },
}
