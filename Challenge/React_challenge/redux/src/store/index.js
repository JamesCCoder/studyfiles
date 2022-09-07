// http://jsonplaceholder.typicode.com/posts

import {createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
    "data/getData",
    async () =>{
        const data = await fetch("http://jsonplaceholder.typicode.com/posts");
        const formatData = await data.json();
        return formatData;
    }
)

const dataSlice = createSlice({
    name:"data",
    initialState:{val:0, data:[], isLoading:false},
    reducers:{
        addVal(state,action){
            state.val = state.val + action.payload;
        }
    },
    extraReducers:{
        [getData.pending]:(state,action) =>{
             state.isLoading = true;
        },
        [getData.fulfilled]:(state,action) =>{
             state.data = action.payload;
             state.isLoading = false;
        },
        [getData.rejected]:(state,action) =>{
             state.isLoading = false;
        },
    },
})

export const actions = dataSlice.actions;

const store = configureStore({
    reducer: dataSlice.reducer,
})

export default store;