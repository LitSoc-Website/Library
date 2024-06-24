import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../models/User';
import { LoginUserPayload, RegisterUserPayload } from '../../models/User';
import { FetchUserPayload } from '../../models/User';
interface AuthenticationSliceState {
    loggedInUser: User | undefined;
    profileUser: User | undefined;
    loading: boolean;
    error: boolean;
    registerSuccess: boolean;
}
const initialState: AuthenticationSliceState = {
    loggedInUser: undefined,
    profileUser: undefined,
    loading: false,
    error: false,
    registerSuccess: false
};

export const loginUser=createAsyncThunk(
    'auth/login',
    async (user:LoginUserPayload, thunkAPI)=>{
        try{
            const req=await axios.post('https://localhost:8000/auth/login', user);
            return req.data.user;
        }catch(e){
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/register',
    async (user: RegisterUserPayload, thunkAPI) => {
        try {
            const req = await axios.post('https::/localhost:8000/auth/register', user);
            return req.data.user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const fetchUser=createAsyncThunk(
    'auth/fetch',
    async (payload:FetchUserPayload, thunkAPI)=>{
        try{
            const req=await axios.get(`https://localhost:8000/users/${payload.userId}`);
            const user=req.data.user;
            return {
                user,
                property: payload.property
            }
        }catch(e){
            return thunkAPI.rejectWithValue(e);
        }
    });

export const updateUser=createAsyncThunk(
    'auth/update',
    async (payload:User, thunkAPI)=>{
        try{
            const req=await axios.put(`https://localhost:8000/users/`,payload);
            return req.data.user;
        }catch(e){
            return thunkAPI.rejectWithValue(e);
        }
    });

 export const AuthenticationSlice = createSlice({
        name: 'authentication',
        initialState,
        reducers: {
            resetRegisterSuccess(state){
                state={
                    ...state,
                     registerSuccess: false}
                return state;
            },
            resetUser(state,action:PayloadAction<string>){
                state={
                    ...state,
                    [action.payload]:undefined
                }
                return state;
            }
        },
        extraReducers: (builder) => {
            //Pending
            builder.addCase(loginUser.pending, (state, action) => {
                state = {
                    ...state,
                    error: false,
                    loading: true
                }
                return state;
            });
            builder.addCase(registerUser.pending, (state, action) => {
                state={
                    ...state,
                    error:false,
                    loading: true
                }
                return state;
            });
            builder.addCase(fetchUser.pending, (state, action) => {
                state = {
                    ...state,
                    error: false,
                    loading: true
                }
                return state;
            });
            builder.addCase(updateUser.pending, (state, action) => {
                state = {
                    ...state,
                    error: false,
                    loading: true
                }
                return state;
            });

            //Fulfilled
            builder.addCase(fetchUser.fulfilled, (state, action) => {
                state = {
                    ...state,
                    [action.payload.property]: action.payload.user,
                    loading: false
                }
                return state;
            });
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state = {
                    ...state,
                    loggedInUser: action.payload,
                    loading: false
                }
                return state;
            });
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state={
                    ...state,
                    registerSuccess: true,
                    loading: false
                }
                return state;
            });
            builder.addCase(updateUser.fulfilled, (state, action) => {
                state = {
                    ...state,
                    loggedInUser: action.payload,
                    profileUser: action.payload,
                    loading: false
                }
                return state;
            });

            //Rejected
            builder.addCase(loginUser.rejected, (state, action) => {
                state = {
                    ...state,
                    error: true,
                    loading: false
                }
                return state;
            });
            builder.addCase(registerUser.rejected, (state, action) => {
                state={
                    ...state,
                    error: true,
                    loading: false
                }
                return state;
            });
            builder.addCase(fetchUser.rejected, (state, action) => {
                state = {
                    ...state,
                    error: true,
                    loading: false
                }
                return state;
            });
            builder.addCase(updateUser.rejected, (state, action) => {
                state = {
                    ...state,
                    error: true,
                    loading: false
                }
                return state;
            });
        }
    }
    );
export const { resetRegisterSuccess ,resetUser} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;