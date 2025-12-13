import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        addtocart: (state, actions) => {
            const item = actions.payload
            const existing = state.cart.find(i => i.id === item.id)
            if (existing) {
                existing.count += 1
            }
            else {
                state.cart.push({ ...item, count: 1 })
            }
        },
        removefromcart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        handleincrement: (state, action) => {
            const item = state.cart.find(i => i.id === action.payload)
            if (item) {
                item.count += 1
            }
        },
        handledecrement: (state, action) => {
            const item = state.cart.find(i => i.id === action.payload)
            if (item) {
                item.count -= 1
            }
        },
        clearcart: (state) => {
            state.cart = []
        }
    }
})
export const { addtocart, removefromcart, handleincrement, handledecrement, clearcart } = cartSlice.actions
export default cartSlice.reducer