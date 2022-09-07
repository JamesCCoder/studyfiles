import {configureStore, createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// http://jsonplaceholder.typicode.com/posts

export const dataFetch = createAsyncThunk(
    "data/getData",
    async () =>{
        const data = await fetch("http://jsonplaceholder.typicode.com/posts");
        const formatData = await data.json();
        return formatData;
    }
)

const dataSlice = createSlice({
    name:"data",
    initialState:{val:0, data:[], isLoading:false, index:5},
    reducers:{
        addVal(state,action){
            state.val = state.val + action.payload;
        },
        addIndex(state,action){
            state.index = state.index + 5;
        }
    },
    extraReducers:{
        [dataFetch.pending]:(state,action) =>{
           state.isLoading = true;
        },
        [dataFetch.fulfilled]:(state,action) =>{
           state.data = action.payload;
           state.isLoading = false;
        },
        [dataFetch.rejected]:(state,action) =>{
           state.isLoading = false;
        },
    },
})

export const actions = dataSlice.actions;

const store = configureStore({
    reducer: dataSlice.reducer,
})

export default store;