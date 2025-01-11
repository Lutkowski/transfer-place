import {Transfer} from "../../store/orderForm";
import {IDestination} from "../../widgets/Hero";


export const destinationItems: IDestination[] = [
    {destination: Transfer.AIRPORT, text: "Аэропорт Стригино"},
    {destination: Transfer.RAILWAY_STATION, text: "ЖД Вокзал"},
    {destination: Transfer.ADDRESS, text: "С адреса на адрес"},
    {destination: Transfer.RENT, text: "Аренда авто с водителем"},
    {destination: Transfer.INTERCITY, text: "Междугородние поездки"},

];
