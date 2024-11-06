// playerRating.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatingState {
  yourRatings: Record<string, number>;
}

const initialState: RatingState = {
  yourRatings: {
    attack: 0,
    defence: 0,
    passes: 0,
    intelligence: 0,
  },
};

const playerRatingSlice = createSlice({
  name: "playerRating",
  initialState,
  reducers: {
    setPlayerRating: (
      state,
      action: PayloadAction<{ category: string; value: number }>,
    ) => {
      const { category, value } = action.payload;
      state.yourRatings[category] = value;
    },
  },
});

export const { setPlayerRating } = playerRatingSlice.actions;
export default playerRatingSlice.reducer;
