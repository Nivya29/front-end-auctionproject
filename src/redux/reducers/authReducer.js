// src/redux/reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    // Add other state properties if needed
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    // Add other reducers if needed
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
