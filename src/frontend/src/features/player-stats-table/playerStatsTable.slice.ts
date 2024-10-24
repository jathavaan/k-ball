import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PlayerStatsProps,
  PlayerStatsTableState,
} from "./playerStatsTable.types";

const initialState: PlayerStatsTableState = {
  playerStatsTable: [],
};

const playerStatsTableSlice = createSlice({
  name: "playerStatsTables",
  initialState,
  reducers: {
    setPlayerStatsTable: (
      state,
      action: PayloadAction<{ playerStatsTable: PlayerStatsProps[] }>,
    ) => {
      state.playerStatsTable = action.payload.playerStatsTable;
    },
  },
});

export const { setPlayerStatsTable } = playerStatsTableSlice.actions;
export const playerStatsTableReducer = playerStatsTableSlice.reducer;
