import { configureStore } from "@reduxjs/toolkit";
import { playerCardReducer } from "./features/player-card";

export const store = configureStore({
  reducer: { playerCardReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
