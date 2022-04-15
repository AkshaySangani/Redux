import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: '',
}

export const theamSlice = createSlice({
    name: 'theam',
    initialState:initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {changeColor } = theamSlice.actions

export default theamSlice.reducer