import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counter';
import { usersReducer } from './slices/users';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
