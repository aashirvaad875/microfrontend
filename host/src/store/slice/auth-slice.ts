import type { PayloadAction, Slice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

type AuthStateType = {
  isLoading: boolean
  accessToken: string
  refreshToken: string
  lastLoggedIn: string
  isProfileSwitching: boolean
}

const initialState: AuthStateType = {
  isLoading: false,
  accessToken: '',
  refreshToken: '',
  lastLoggedIn: '',
  isProfileSwitching: false,
}

export const loginSlice: Slice<AuthStateType> = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.accessToken = `Bearer ${action.payload?.data?.token?.accessToken}`
      state.refreshToken = `Bearer ${action.payload?.data?.token?.refreshToken}`
      state.isLoading = false
    },

    logout(state) {
      Object.assign(state, initialState)
      state.isLoading = false
    },

    updateToken(state, action: PayloadAction<{ refreshToken: string; accessToken: string }>) {
      if (action.payload?.refreshToken) {
        state.refreshToken = `Bearer ${action.payload?.refreshToken}`
      }
      if (action.payload?.accessToken) {
        state.accessToken = `Bearer ${action.payload?.accessToken}`
      }
    },
    updateLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    updateLoggedIn(state, action: PayloadAction<string>) {
      state.lastLoggedIn = action.payload
    },
    updateProfileSwitching(state, action: PayloadAction<boolean>) {
      state.isProfileSwitching = action.payload
    },
  },
})

// Reducer
export const selectAuth = (state: RootState) => state.auth
export const { updateLoggedIn, loginSuccess, logout, updateToken, updateLoading, updateProfileSwitching } =
  loginSlice.actions
export default loginSlice.reducer
