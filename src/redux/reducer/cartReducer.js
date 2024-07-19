// USING CREATE SLICE TO HANDLE REDUCERS AND ACTIONS 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}; 

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.cart.push({ ...action.payload, qty: 1 });
            }
        },
        delCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem.qty === 1) {
                state.cart = state.cart.filter(item => item.id !== action.payload.id);
            } else {
                existingItem.qty -= 1;
            }
        }
    },
});

export const { addCart, delCart } = cartSlice.actions;
export default cartSlice.reducer;
