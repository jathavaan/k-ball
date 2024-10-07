import { configureStore } from "@reduxjs/toolkit";
import { playerCardReducer } from "./features/player-card";
import { playerProfileInfoReducer } from "./features/player-profile-info";

export const store = configureStore({
  reducer: { playerCardReducer, playerProfileInfoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
