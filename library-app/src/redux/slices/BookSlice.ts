import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "../../models/Book";
interface bookSliceState{
    loading:boolean;
    error:boolean;
    books:Book[];
}
const initialState:bookSliceState={
    loading:true,
    error:false,
    books:[]
}
export const fetchAllBooks=createAsyncThunk(
    'book/all',
    async(paylaod,thunkAPI)=>{
        try{
            let response=await axios.get("http://localhost:8000/books");
            return response.data.books;
        }catch(e){
            return thunkAPI.rejectWithValue(e);
        }
    }
);
export const bookSlice=createSlice({
    name:"book",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllBooks.pending,(state,action)=>{
            state={
                ...state,
                books:[],
                loading:true,
            }
            return state;
        });
        builder.addCase(fetchAllBooks.fulfilled,(state,action)=>{
            state={
                ...state,
                books:action.payload,
                loading:false,
            }
            return state;
        });
    }
}
);
export const {}=bookSlice.actions;
export default bookSlice.reducer;