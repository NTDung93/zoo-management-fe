import { createSlice } from '@reduxjs/toolkit';
import { CartItemObj } from '../../models/cart';
import { toast } from 'react-toastify';

interface CartState {
    cartItems: CartItemObj[];
}

const initialState: CartState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.ticket.ticketId === action.payload.ticket.ticketId);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                toast.info(`Added ${action.payload.quantity} more ${action.payload.ticket.type} ticket to cart`, { position: "bottom-left", autoClose: 2000 });
            } else {
                state.cartItems.push(action.payload);
                toast.success(`Added ${action.payload.quantity} ${action.payload.ticket.type} ticket to cart`, { position: "bottom-left", autoClose: 2000 });
            }

            //set day of all cart items to the current date
            state.cartItems.forEach(item => {
                item.entryDate = new Date();
            });

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        updateEntryDate(state, action) {
            const existingItem = state.cartItems.find(item => item.ticket.ticketId === action.payload.ticket.ticketId);
            if (existingItem) {
                existingItem.entryDate = action.payload.entryDate;
                toast.info(`Updated entry date for ${action.payload.ticket.type} ticket`, { position: "bottom-left", autoClose: 2000 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                item => item.ticket.ticketId !== action.payload.ticket.ticketId
            );
            state.cartItems = nextCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            toast.error(`Removed ${action.payload.ticket.type} ticket from cart`, { position: "bottom-left", autoClose: 2000 });
        },
        decreaseQuantity(state, action) {
            const existingItem = state.cartItems.find(item => item.ticket.ticketId === action.payload.ticket.ticketId);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                toast.info(`Removed 1 ${action.payload.ticket.type} ticket from cart`, { position: "bottom-left", autoClose: 2000 });
            }else if(existingItem && existingItem.quantity === 1){
                const nextCartItems = state.cartItems.filter(
                    item => item.ticket.ticketId !== action.payload.ticket.ticketId
                );
                state.cartItems = nextCartItems;
                toast.error(`Removed ${action.payload.ticket.type} ticket from cart`, { position: "bottom-left", autoClose: 2000 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart(state){
            state.cartItems = [];
            localStorage.removeItem('cartItems');
            toast.error(`Cleared cart`, { position: "bottom-left", autoClose: 2000 });
        }
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, updateEntryDate } = cartSlice.actions;
