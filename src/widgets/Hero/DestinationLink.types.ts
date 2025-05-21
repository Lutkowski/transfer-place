import {TransferType} from "../../shared/enums/transfer-type.enum.ts";


export interface IDestination {
    destination: TransferType;
    text: string;
}
