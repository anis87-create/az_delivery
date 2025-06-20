import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from '../services/userService';
const initialState= {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    errors: [],
    token: localStorage.getItem('token') || null,
    isAuth: localStorage.getItem('isAuth') || null
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
            localStorage.removeItem('token');
            localStorage.removeItem('isAuth');
            state.user = null;
            state.token = null;
            state.isAuth = false;
        }
    },
    extraReducers:(builder) => {
       builder.addCase(register.pending, (state) => {
          state.loading = true;
          state.errors = [];
          state.isAuth = false;
       })
       .addCase(register.fulfilled, (state, action) => {
          state.loading = false;
          state.errors = [];
          state.user = action.payload;
          state.isAuth = null;
       })
       .addCase(register.rejected, (state, action) => {
         state.loading = false;
         state.errors = action.payload;
         state.user = null;
         state.isAuth = false;
       })
       .addCase(login.pending, (state, action)=> {
         state.loading = true;
         state.errors = [];
         state.isAuth = false;
       })
       .addCase(login.fulfilled, (state, action)=> {
         state.loading = false;
         state.errors = [];
         state.user = action.payload;
         state.token = action.payload.token;
         state.isAuth = true;
       })
       .addCase(login.rejected, (state, action)=> {
         state.loading = false;
         state.errors = action.payload;         
         state.user = null;
         state.token = null;
         state.isAuth = false;
       })
       ;
    }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;


