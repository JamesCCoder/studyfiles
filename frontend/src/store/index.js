import {createSlice, configureStore} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:"data",
    initialState:{
        text:"",
        num:0,
        value:"",
        list:[],
    },
    reducers:{
        changeText(state,action){
            state.text = action.payload;
        },
        addValue(state, action){
            state.num = state.num + action.payload;
        },
        changeValue(state, action){
            state.value = action.payload[0] + action.payload[1];
        },
        changeList(state, action){
            state.list = [...state.list, action.payload];
        }
    },
})

export const actions = dataSlice.actions;

const store = configureStore({
    reducer:dataSlice.reducer,
})

export default store;