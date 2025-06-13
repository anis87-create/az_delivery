import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from '../services/userService';
const initialState= {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    errors: [],
    token: localStorage.getItem('token') || null
}
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
   return await userService.register(user, thunkAPI);
});

export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    return await userService.login(user, thunkAPI);
});
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null;
        }
    },
    extraReducers:(builder) => {
       builder.addCase(register.pending, (state) => {
          state.loading = true;
          state.errors = [];
       })
       .addCase(register.fulfilled, (state, action) => {
          state.loading = false;
          state.errors = [];
          state.user = action.payload;
       })
       .addCase(register.rejected, (state, action) => {
         state.loading = false;
         state.errors = action.payload;
         state.user = null;
       })
       .addCase(login.pending, (state, action)=> {
         state.loading = true;
         state.errors = [];
       })
       .addCase(login.fulfilled, (state, action)=> {
         state.loading = false;
         state.errors = [];
         state.user = action.payload;
         state.token = action.payload.token;
       })
       .addCase(login.rejected, (state, action)=> {
         state.loading = false;
         state.errors = action.payload;
         state.user = null;
         state.token = null;
       })
       ;
    }
});

export default authSlice.reducer;


