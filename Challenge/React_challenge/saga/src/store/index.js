import {configureStore, createSlice} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const dataSlice = createSlice({
    name:"data",
    initialState:{data:[], isLoading:false},
    reducers:{
        getDataFetch:(state,action) =>{
            state.isLoading = true;
        },
        getDataSuccess:(state,action) =>{
            state.data = action.payload;
            state.isLoading = false;
        },
        getDataFailure:(state,action) =>{
            state.isLoading = false;
        }
    }
})

export const {getDataFetch, getDataSuccess, getDataFailure} = dataState.actions;


const saga = createSagaMiddleware();

const store = configureStore({
    reducer:dataSlice.reducer,
    middleware:[saga],
})

export default store;