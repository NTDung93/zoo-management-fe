import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../components/Cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});