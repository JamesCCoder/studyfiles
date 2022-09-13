import {createSlice, configureStore} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:"data",
    initialState:{value:0},
    reducers:{
        changeValue(state, action){
            state.value = state.value + action.payload;
        },

    },
})

export const actions = dataSlice.actions;

const store = configureStore({
    reducer:dataSlice.reducer,
})

export default store;