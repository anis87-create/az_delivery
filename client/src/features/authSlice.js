import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from '../services/userService';
const initialState= {
    user: null,
    loading: false,
    errors: [],
    token: null
}
export const register = createAsyncThunk('auth/register', async (user) => {
   return await userService.register(user);
})
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
       });
    }
});

export default authSlice.reducer;


