import { createSlice } from '@reduxjs/toolkit'
import { fetchSeriesItem, fetchSeriesItems } from './asyncActions'

const initialState = {
    item: [],
    items: [],
    status: ''
}

export const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSeriesItems.pending, (state) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(fetchSeriesItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchSeriesItems.rejected, (state) => {
            state.status = 'error'
        })
        builder.addCase(fetchSeriesItem.pending, (state) => {
            state.status = 'loading'
            state.item = []
        })
        builder.addCase(fetchSeriesItem.fulfilled, (state, action) => {
            state.item = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchSeriesItem.rejected, (state) => {
            state.status = 'error'
        })
    }
})

// export const {  } = seriesSlice.actions

export default seriesSlice.reducer