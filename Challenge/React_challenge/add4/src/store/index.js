import {createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";

export const dataFetch = createAsyncThunk(
    "data/getData",
    async() => {
        const data = await fetch("");
        const dataFormat = await data.json();
        return dataFormat;
    }
)

const dataSlice = createSlice({
    name:"data",
    initialState:{value:0, isFetch:false, val:[]},
    reducers:{
        addValue(state, action){
            state.value = state.value + 1;
        },
        setValue(state,action){
            state.value = action.payload;
        }
    },
    extraReducers:{
        [dataFetch.pending]:(state,action) =>{
           state.isFetch = true;
        },
        [dataFetch.fulfilled]:(state,action) =>{
            state.isFetch = false;
            state.val = action.payload;
        },
        [dataFetch.rejected]:(state,action) =>{
            state.isFetch = false;
        },
    },
})

export const actions = dataSlice.actions;

const store = configureStore({
    reducer: dataSlice.reducer,
})

export default store;