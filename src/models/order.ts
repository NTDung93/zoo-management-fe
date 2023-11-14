
export interface OrderObj {
    email: string;
    fullName: string;
    phoneNumber: string;
    orderDetails: OrderDetailObject[];
  }

  export interface OrderDetailObject {
    quantity: number;
    entryDate: Date;
    unitTotalPrice: number;
    ticketId: string;
  }