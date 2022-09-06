import { configureStore, createSlice } from "@reduxjs/toolkit";

const numSlice = createSlice({
    name:"num",
    initialState:{value:0},
    reducers:{
        addValue(state,action){
            state.value = state.value + 1;
        },
        minusValue(state,action){
            state.value = state.value - 1;
        },
        resetValue(state,action){
            state.value = 0;
        },
    },
})

export const actions = numSlice.actions;

const store = configureStore({
    reducer: numSlice.reducer,
})

export default store;