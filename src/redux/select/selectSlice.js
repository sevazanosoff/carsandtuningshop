import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: []
}

export const selectSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        setSelected(state, action) {
            action.payload.selected = !action.payload.selected
        }
    },

})

export const { setSelected } = selectSlice.actions

export default selectSlice.reducer