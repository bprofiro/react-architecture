import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: '@counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCounter: draft => {
      draft.value += 1;
    },
    decrementCounter: draft => {
      draft.value -= 1;
    },
    resetCounter: draft => {
      draft.value = 0;
    },
    randomIncrementCounter: (draft, action: PayloadAction<number>) => {
      draft.value += action.payload;
    },
  },
});

export const {
  decrementCounter,
  incrementCounter,
  randomIncrementCounter,
  resetCounter,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
