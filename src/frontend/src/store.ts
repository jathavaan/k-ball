import { configureStore } from "@reduxjs/toolkit";
import { playerCardReducer } from "./features/player-card";
import { playerProfileInfoReducer } from "./features/player-profile-info";
import { playerStatsTableReducer } from "./features/player-stats-table";
import { playerFiltersReducer } from "./features/player-filters";
import { searchbarReducer } from "./features/searchbar/searchbar.slice";

export const store = configureStore({
  reducer: {
    playerCardReducer,
    playerProfileInfoReducer,
    playerStatsTableReducer,
    playerFiltersReducer,
    searchbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
