export class Order {
    public id: number;
    public symbol: string;
    public quantity: number;
    public price: number;
    public side: string;
    public isValid: boolean;
    public validation: OrderValidation;
}

export class OrderValidation {
    public id: number;
    public messages: string;
}