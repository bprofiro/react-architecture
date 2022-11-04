import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  name: string
}

type UserState = {
  value: {
    loggedUser: User
  }
}

const initialState = {
  value: {
    loggedUser: {}
  }
} as UserState

const authSlice = createSlice({
  name: '@auth',
  initialState,
  reducers: {
    signIn: (draft, action: PayloadAction<User>) => {
      draft.value.loggedUser = action.payload
    },
    signOut: draft => {
      draft.value.loggedUser = {} as User
    }
  }
})

export const { signIn, signOut } = authSlice.actions

export const authReducer = authSlice.reducer
