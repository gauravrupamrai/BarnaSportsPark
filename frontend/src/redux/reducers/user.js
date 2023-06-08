import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
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
        if(action.payload.user.role === "admin"){
          state.isAdmin = true;
        }
        state.isAuthenticated = true;
        state.user_token = action.payload.token;
      } else {
        state.isAuthenticated = false;
        state.isAdmin = false;
        state.user_token = null;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer

