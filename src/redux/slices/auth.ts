import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthType {
  user: boolean;
}

const initialState: AuthType = {
  user: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.user = true
    },
    signOut: (state) => {
      state.user = false
    }
  }
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer
