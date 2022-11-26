import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logIn, register, logOut, refreshUser } from './authOperations';

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

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),

  // .addMatcher(
  //   isAnyOf(
  //     register.rejected,
  //     logIn.rejected,
  //     logOut.rejected,
  //     refreshUser.rejected
  //   ),
  //   state => {
  //     state.isLoggedIn = true;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(
  //     register.pending,
  //     logIn.pending,
  //     logOut.pending,
  //     refreshUser.pending
  //   ),
  //   (state, action) => {
  //     state.registerIsLoading = false;
  //     state.registerError = action.payload;
  //   }
  // ),
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReduser = persistReducer(authPersistConfig, authSlice.reducer);
