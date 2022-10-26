import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  login: string;
  id: string;
};

type UserState = {
  value: User[]
}

const initialState = {
  value: []
} as UserState

const usersSlice = createSlice({
  name: '@user',
  initialState,
  reducers: {
    setUsers: (draft, action: PayloadAction<User[]>) => {
      draft.value = action.payload;
    },
    resetUsers: draft => {
      draft.value = [];
    },
  },
});

export const {
  resetUsers,
  setUsers
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
