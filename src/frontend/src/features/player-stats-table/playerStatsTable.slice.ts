import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PlayerStatsProps,
  PlayerStatsTableState,
} from "@features/player-stats-table/playerStatsTable.types";

const initialState: PlayerStatsTableState = {
  playerStatsTable: [],
};

const playerStatsTableSlice = createSlice({
  name: "playerStatsTables",
  initialState,
  reducers: {
    setPlayerStatsTable: (state, action: PayloadAction<PlayerStatsProps[]>) => {
      console.log("Updating Redux state with:", action.payload);
      state.playerStatsTable = action.payload;
    },
  },
});

export const { setPlayerStatsTable } = playerStatsTableSlice.actions;
export const playerStatsTableReducer = playerStatsTableSlice.reducer;
