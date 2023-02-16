import { createSlice } from '@reduxjs/toolkit'
import { fetchCar } from './asyncActions'

const initialState = {
    item: {},
    status: ''
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCar.pending, (state) => {
            state.status = 'loading'
            state.item = {}
        })
        builder.addCase(fetchCar.fulfilled, (state, action) => {
            state.item = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchCar.rejected, (state) => {
            state.status = 'error'
        })
    }
})

// export const {  } = carSlice.actions

export default carSlice.reducer