import { TicketObj } from './ticket';
export interface CartObj {
    id: number;
    items: CartItemObj[];
}

export interface CartItemObj {
    ticket: TicketObj;
    quantity: number;
    entryDate: Date;
}