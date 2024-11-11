import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryRatings {
  attack: number;
  defence: number;
  passing: number;
  intelligence: number;
}

interface PlayerRatingState {
  ratingsByPlayer: {
    [playerId: string]: {
      overall: CategoryRatings;
      userRating?: CategoryRatings; // Brukerens rating for spilleren, hvis den finnes
    };
  };
}

const initialState: PlayerRatingState = {
  ratingsByPlayer: {},
};

const playerRatingSlice = createSlice({
  name: "playerRating",
  initialState,
  reducers: {
    setOverallRating: (
      state,
      action: PayloadAction<{ playerId: string; overall: CategoryRatings }>,
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
      action: PayloadAction<{ playerId: string; userRating: CategoryRatings }>,
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
        playerId: string;
        category: string;
        value: number;
      }>,
    ) => {
      const { playerId, category, value } = action.payload;
      if (state.ratingsByPlayer[playerId]?.userRating) {
        state.ratingsByPlayer[playerId].userRating![
          category as keyof CategoryRatings
        ] = value;
      }
    },
  },
});

export const { setOverallRating, setUserRating, updateUserRatingCategory } =
  playerRatingSlice.actions;
export default playerRatingSlice.reducer;
