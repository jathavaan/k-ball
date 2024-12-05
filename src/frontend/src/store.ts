import { configureStore } from "@reduxjs/toolkit";
import { playerProfileInfoReducer } from "@features/player-profile-info";
import { playerStatsTableReducer } from "@features/player-stats-table";
import { playerFiltersReducer } from "@features/player-filters";
import { searchbarReducer } from "@features/searchbar";
import { playerCardGridReducer } from "@features/player-card";
import { playerSortingReducer } from "@features/player-sorting";
import { loginFormReducer, registerFormReducer } from "@features/auth";
import { playerRatingReducer } from "@features/player-rating";
import { profileMenuReducer } from "@features/profile-menu";
import { threadReducer } from "@features/thread/thread.slice.ts";
import { threadsReducer } from "@features/threads/threads.slice.ts";

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
    threadReducer,
    threadFormReducer: threadsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
