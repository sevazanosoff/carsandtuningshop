import { createSlice } from '@reduxjs/toolkit'
import { fetchTuningItems } from './asyncActions'


const initialState = {
    items: [],
    status: '',
}

export const tuningSlice = createSlice({
    name: 'tuning',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTuningItems.pending, (state) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(fetchTuningItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchTuningItems.rejected, (state) => {
            state.status = 'error'
        })

    }
})

// export const {  } = tuningSlice.actions

export default tuningSlice.reducer