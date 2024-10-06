import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerCardProps, PlayerCardState } from "./playerCard.types.ts";

const initialState: PlayerCardState = {
  playerCards: [],
};

const playerCardSlice = createSlice({
  name: "playerCards",
  initialState,
  reducers: {
    setPlayerCards: (state, action: PayloadAction<PlayerCardProps[]>) => {
      state.playerCards = action.payload;
    },
  },
});

export const { setPlayerCards } = playerCardSlice.actions;
export const playerCardReducer = playerCardSlice.reducer;
