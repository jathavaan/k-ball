import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rating, PlayerRatingState } from "./playerRating.types.ts";

const initialState: PlayerRatingState = {
  ratingsByPlayer: {},
};

const playerRatingSlice = createSlice({
  name: "playerRating",
  initialState,
  reducers: {
    setOverallRating: (
      state,
      action: PayloadAction<{ playerId: number; overall: Rating }>,
    ) => {
      const { playerId, overall } = action.payload;
      if (!state.ratingsByPlayer[playerId]) {
        state.ratingsByPlayer[playerId] = { overall };
      } else {
        state.ratingsByPlayer[playerId].overall = overall;
      }
    },
    setUserRating: (
      state,
      action: PayloadAction<{ playerId: number; userRating: Rating }>,
    ) => {
      const { playerId, userRating } = action.payload;
      if (!state.ratingsByPlayer[playerId]) {
        state.ratingsByPlayer[playerId] = {
          overall: { attack: 0, defence: 0, passing: 0, intelligence: 0 },
          userRating,
        };
      } else {
        state.ratingsByPlayer[playerId].userRating = userRating;
      }
    },
    updateUserRatingCategory: (
      state,
      action: PayloadAction<{
        playerId: number;
        category: string;
        value: number;
      }>,
    ) => {
      const { playerId, category, value } = action.payload;
      if (state.ratingsByPlayer[playerId]?.userRating) {
        state.ratingsByPlayer[playerId].userRating![category as keyof Rating] =
          value;
      }
    },
  },
});

export const { setOverallRating, setUserRating, updateUserRatingCategory } =
  playerRatingSlice.actions;
export const playerRatingReducer = playerRatingSlice.reducer;
