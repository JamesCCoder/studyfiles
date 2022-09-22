import { configureStore, createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const dataFetch = createAsyncThunk(
    "data/getData",
    async () =>{
        const data = await fetch("http://jsonplaceholder.typicode.com/posts");
        const dataFormat = await data.json();
        return dataFormat;
    }
)

const dataSlice = createSlice({
    name:"data",
    initialState:{value:0, list:[], isLoading:false},
    reducers:{
        addValue(state, action){
            state.value = state.value + action.payload;
        }
    },
    extraReducers:{
        [dataFetch.pending]:(state, action) =>{
            state.isLoading = true;
        },
        [dataFetch.fulfilled]:(state, action) =>{
            state.isLoading = false;
            state.list = action.payload;
        },
        [dataFetch.rejected]:(state, action) =>{
            state.isLoading = false;
        }
    }
})

export const actions = dataSlice.actions;

const store = configureStore({
    reducer: dataSlice.reducer,
})

export default store;