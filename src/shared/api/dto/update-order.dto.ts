import {CarClass} from "../../enums/car-class.enum";
import {TransferType} from "../../enums/transfer-type.enum";


export class UpdateOrderDto {
    carClass: CarClass;

    transferType: TransferType;

    withChild?: boolean;

    withSign?: boolean;

    hoursQuantity?: number;

    pickupLocation?: string;

    dropoffLocation?: string;

    pickupDate?: string;

    pickupTime?: string;

    comment?: string;

    name: string;
}
