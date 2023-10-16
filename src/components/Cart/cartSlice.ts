import { createSlice } from '@reduxjs/toolkit';
import { CartItemObj } from '../../models/cart';
import { toast } from 'react-toastify';

interface CartState {
    cartItems: CartItemObj[];
    totalQuantity: number;
}

const initialState: CartState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : [],
    totalQuantity: 4,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.ticket.ticketId === action.payload.ticket.ticketId);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                toast.info(`Added ${action.payload.quantity} more ${action.payload.ticket.type} ticket to cart`, {position: "bottom-left", autoClose: 2000});
            } else {
                state.cartItems.push(action.payload);
                toast.success(`Added ${action.payload.quantity} ${action.payload.ticket.type} ticket to cart`, {position: "bottom-left", autoClose: 2000});
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    },
});

export const { addToCart } = cartSlice.actions;
