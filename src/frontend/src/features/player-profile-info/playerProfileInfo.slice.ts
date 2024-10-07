import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PlayerProfileInfoProps,
  PlayerProfileInfoState,
} from "./playerProfileInfo.types.ts";

const initialState: PlayerProfileInfoState = {
  playerProfileInfos: [],
};

const playerProfileInfoSlice = createSlice({
  name: "playerProfileInfos",
  initialState,
  reducers: {
    setPlayerProfileInfos: (
      state,
      action: PayloadAction<PlayerProfileInfoProps[]>,
    ) => {
      state.playerProfileInfos = action.payload;
    },
  },
});

export const { setPlayerProfileInfos } = playerProfileInfoSlice.actions;
export const playerProfileInfoReducer = playerProfileInfoSlice.reducer;
