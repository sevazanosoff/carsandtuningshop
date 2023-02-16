import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import seriesSlice from './series/seriesSlice'
import tuningSlice from './tuning/tuningSlice'
import carSlice from './car/carSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        series: seriesSlice,
        tuning: tuningSlice,
        car: carSlice
    },
})