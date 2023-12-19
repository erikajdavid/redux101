//a slice is splittling up redux state objects into multiple slices of state.
//a slice is a collection of reducer logic and actions for a single feature in the app.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    //reducers are where you name the actions
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
    }
});

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;