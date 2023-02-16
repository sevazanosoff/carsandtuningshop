import { createSlice } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { getCartFromLS } from '../../utils/getCartFromLS'

const { items, price } = getCartFromLS()

const initialState = {
    cartItems: items,
    totalPrice: price
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.cartItems.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = calcTotalPrice(state.cartItems)
        },
        minusItem(state, action) {
            const findItem = state.cartItems.find(obj => obj.id === action.payload.id)
            if (findItem.count > 1) {
                findItem.count--
                state.totalPrice = calcTotalPrice(state.cartItems)
            } else {
                state.totalPrice = state.totalPrice - (findItem.discount > 0 ? (findItem.price - (findItem.price * +findItem.discount) / 100) : findItem.price)
                state.cartItems = state.cartItems.filter(obj => obj.id !== action.payload.id)
            }
        },
        removeItem(state, action) {
            const findItem = state.cartItems.find(obj => obj.id === action.payload.id)
            if (findItem) {
                state.totalPrice = state.totalPrice - (findItem.discount > 0 ? (findItem.price - (findItem.price * +findItem.discount) / 100) * findItem.count : findItem.price * findItem.count)
                state.cartItems = state.cartItems.filter(obj => obj.id !== action.payload.id)
            }
        },
        clearItems(state) {
            state.cartItems = []
            state.totalPrice = 0
        },
    },
})

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer