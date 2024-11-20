import { configureStore } from "@reduxjs/toolkit";
import { playerProfileInfoReducer } from "./features/player-profile-info";
import { playerStatsTableReducer } from "./features/player-stats-table";
import { playerFiltersReducer } from "./features/player-filters";
import { searchbarReducer } from "./features/searchbar";
import { playerCardGridReducer } from "./features/player-card";
import { playerSortingReducer } from "./features/player-sorting";
import { loginFormReducer, registerFormReducer } from "./features/auth";
import { playerRatingReducer } from "./features/player-rating/";
import { profileMenuReducer } from "./features/profile-menu";

export const store = configureStore({
  reducer: {
    playerProfileInfoReducer,
    playerStatsTableReducer,
    playerFiltersReducer,
    searchbarReducer,
    playerCardGridReducer,
    playerSortingReducer,
    loginFormReducer,
    registerFormReducer,
    playerRatingReducer,
    profileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
