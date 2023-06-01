import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
    console.log("LoadUserRequest");
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
    console.log("LoadUserSuccess");
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
    console.log("LoadUserFailure");
  },
  clearErrors: (state) => {
    state.error = null;
    console.log("clearErrors");
  },
});
