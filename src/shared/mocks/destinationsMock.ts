import {IDestination} from "../../widgets/Hero";
import {Destinations} from "../../entities/destination/destination.types.ts";


export const destinationItems: IDestination[] = [
    {destination: Destinations.AIRPORT, text: "Аэропорт Стригино"},
    {destination: Destinations.RAILWAY_STATION, text: "ЖД Вокзал"},
    {destination: Destinations.ADDRESS, text: "С адреса на адрес"},
    {destination: Destinations.RENT, text: "Аренда авто с водителем"},
    {destination: Destinations.INTERCITY, text: "Междугородние поездки"},

];
