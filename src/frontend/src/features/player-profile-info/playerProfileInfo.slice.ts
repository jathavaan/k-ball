import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PlayerProfileInfoProps,
  PlayerProfileInfoState,
} from "@features/player-profile-info/playerProfileInfo.types.ts";

const initialState: PlayerProfileInfoState = {
  playerProfileInfo: undefined,
};

const playerProfileInfoSlice = createSlice({
  name: "playerProfileInfos",
  initialState,
  reducers: {
    setPlayerProfileInfo: (
      state,
      action: PayloadAction<PlayerProfileInfoProps>,
    ) => {
      state.playerProfileInfo = action.payload;
    },
  },
});

export const { setPlayerProfileInfo } = playerProfileInfoSlice.actions;
export const playerProfileInfoReducer = playerProfileInfoSlice.reducer;
