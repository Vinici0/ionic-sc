import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigation/slice';

export const store = configureStore({
  reducer: {
    navigationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
