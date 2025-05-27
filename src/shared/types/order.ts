
export interface Order {
    id: number;
    carClass: {
        id: number;
        name: string;
    };
    destination: {
        id: number;
        name: string;
    };
    withChild: boolean;
    withSign: boolean;
    hoursQuantity: number | null;
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    comment: string;
    name: string;
    phone: string;
    status: string;
    price: number | null;
    createdAt: string;
}
