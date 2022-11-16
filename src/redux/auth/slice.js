import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => state)
      .addCase(register.rejected, (state, action) => state),
});

export const authReduser = authSlice.reducer;
