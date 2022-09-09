import {createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";

export const dataFetch = createAsyncThunk(
    "data/getData",
    async() =>{
        const data = await fetch("");
        const dataFormat = await data.json();
        return dataFormat;
    }
)

const dataSlice = createSlice({
    name:"data",
    initialState:{value:0, isStart:false},
    reducers:{
        addValue(state, action){
            state.value = state.value + 1;
        },
        setValue(state, action){
            state.value = action.payload;
        },
        changeStart(state, action){
            state.isStart = action.payload;
        }
    },
    extraReducers:{},
})

export const actions = dataSlice.actions;

const store = configureStore({
    reducer: dataSlice.reducer,
})

export default store;