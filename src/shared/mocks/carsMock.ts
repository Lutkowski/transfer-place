import {ICar} from "../../entities/car/car.types";

const carPath = "/cars"

export const carList: ICar[] = [
    {
        img: {
            src: `${carPath}/standartCar.png`,
            alt: "Toyota Corolla",
        },
        carClass: "СТАНДАРТ",
        title: "Toyota Corolla, KIA Cerato",
        placeNumber: 3,
    },
    {
        img: {
            src: `${carPath}/comfortCar.png`,
            alt: "Toyota Camry",
        },
        carClass: "КОМФОРТ",
        title: "Toyota Camry, KIA Optima",
        placeNumber: 3,
    },
    {
        img: {
            src: `${carPath}/businessCar.png`,
            alt: "Mercedes E-class",
        },
        carClass: "БИЗНЕС",
        title: "Mercedes E-class",
        placeNumber: 3,
    },
    {
        img: {
            src: `${carPath}/miniwanCar.png`,
            alt: "VW Caravelle",
        },
        carClass: "МИНИВЭН",
        title: "VW Caravelle, Hyundai H1",
        placeNumber: 6,
    },
];
