import {Destinations} from "../destination/destination.types.ts";

export interface ICar {
    img: {
        src: string;
        alt: string;
    };
    carClass: string;
    title: string;
    placeNumber: number;
}

export enum carClass {
    STANDART = "Стандарт",
    COMFORT = "Комфорт",
    BUSINESS = "Бизнес",
    MINIWAN = "Минивэн"
}

export const carClassPrices = {
    [carClass.STANDART]: {
        [Destinations.AIRPORT]: 1200,
        [Destinations.RAILWAY_STATION]: 800,
        [Destinations.ADDRESS]: 800,
        [Destinations.RENT]: 1000
    },
    [carClass.COMFORT]: {
        [Destinations.AIRPORT]: 2500,
        [Destinations.RAILWAY_STATION]: 1500,
        [Destinations.ADDRESS]: 1500,
        [Destinations.RENT]: 1500
    },
    [carClass.BUSINESS]: {
        [Destinations.AIRPORT]: 6000,
        [Destinations.RAILWAY_STATION]: 4000,
        [Destinations.ADDRESS]: 4000,
        [Destinations.RENT]: 2000
    },
    [carClass.MINIWAN]: {
        [Destinations.AIRPORT]: 4500,
        [Destinations.RAILWAY_STATION]: 3000,
        [Destinations.ADDRESS]: 3000,
        [Destinations.RENT]: 1500
    },
}
