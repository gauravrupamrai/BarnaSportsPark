// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
// };

// export const userReducer = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading = true;
//     console.log("LoadUserRequest");
//   },
//   LoadUserSuccess: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = true;
//     state.user = action.payload;
//     console.log("LoadUserSuccess");
//   },
//   LoadUserFailure: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = false;
//     state.error = action.payload;
//     console.log("LoadUserFailure");
//   },
//   clearErrors: (state) => {
//     state.error = null;
//     console.log("clearErrors");
//   },
// });

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user_data: null,
  user_token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user_data = action.payload;
      console.log(action.payload)
      if((action.payload)){
        state.isAuthenticated = true;
        state.user_token = action.payload.token;
      } else {
        state.isAuthenticated = false;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer

