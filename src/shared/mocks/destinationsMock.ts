import {IDestination} from "../../widgets/Hero";
import {TransferType} from "../enums/transfer-type.enum.ts";


export const destinationItems: IDestination[] = [
    {destination: TransferType.AIRPORT, text: "Аэропорт Стригино"},
    {destination: TransferType.RAILWAY, text: "ЖД Вокзал"},
    {destination: TransferType.ADDRESS_TO_ADDRESS, text: "С адреса на адрес"},
    {destination: TransferType.RENT_WITH_DRIVER, text: "Аренда авто с водителем"},
    {destination: TransferType.INTERCITY, text: "Междугородние поездки"},

];
