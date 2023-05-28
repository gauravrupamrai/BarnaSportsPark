import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: (builder) => {
        builder
            .addCase("LoadUserRequest", (state) => {
                state.loading = true;
            })
            .addCase("LoadUserSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase("LoadUserFailure", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase("clearErrors", (state) => {
                state.error = null;
            });
    },
});

export const { actions, reducer: userReducer } = userSlice;
