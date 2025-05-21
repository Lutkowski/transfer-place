import {TransferType} from "../../enums/transfer-type.enum.ts";
import {CarClass} from "../../enums/car-class.enum.ts";


export class CalculatePriceDto {
    destination: TransferType;

    carClass: CarClass;

    withChild?: boolean = false;

    withSign?: boolean = false;

    hoursQuantity?: number = 1;
}
