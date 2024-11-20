import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerRatingState } from "./playerRating.types.ts";
import { RootState } from "../../store.ts";

const initialState: PlayerRatingState = {
  attack: null,
  defence: null,
  passing: null,
  intelligence: null,
  average: null,
  overallAttack: null,
  overallDefence: null,
  overallPassing: null,
  overallIntelligence: null,
  overallAverage: null,
  isEditingPlayerRating: false,
};

const playerRatingSlice = createSlice({
  name: "playerRating",
  initialState,
  reducers: {
    setAttack: (state, action: PayloadAction<number | null>) => {
      state.attack = action.payload;
    },
    setDefence: (state, action: PayloadAction<number | null>) => {
      state.defence = action.payload;
    },
    setPassing: (state, action: PayloadAction<number | null>) => {
      state.passing = action.payload;
    },
    setIntelligence: (state, action: PayloadAction<number | null>) => {
      state.intelligence = action.payload;
    },
    setAverage: (state, action: PayloadAction<number | null>) => {
      state.average = action.payload;
    },
    setOverallAttack: (state, action: PayloadAction<number | null>) => {
      state.overallAttack = action.payload;
    },
    setOverallDefence: (state, action: PayloadAction<number | null>) => {
      state.overallDefence = action.payload;
    },
    setOverallPassing: (state, action: PayloadAction<number | null>) => {
      state.overallPassing = action.payload;
    },
    setOverallIntelligence: (state, action: PayloadAction<number | null>) => {
      state.overallIntelligence = action.payload;
    },
    setOverallAverage: (state, action: PayloadAction<number | null>) => {
      state.overallAverage = action.payload;
    },
    resetPlayerRating: (state) => {
      state.attack = null;
      state.defence = null;
      state.passing = null;
      state.intelligence = null;
      state.isEditingPlayerRating = false;
    },
    setIsEditingPlayerRating: (state, action: PayloadAction<boolean>) => {
      state.isEditingPlayerRating = action.payload;
    },
  },
});

export const {
  setAttack,
  setAverage,
  setIntelligence,
  setPassing,
  setDefence,
  setOverallAttack,
  setOverallDefence,
  setOverallPassing,
  setOverallIntelligence,
  setOverallAverage,
  resetPlayerRating,
  setIsEditingPlayerRating,
} = playerRatingSlice.actions;

export const selectAttack = (state: RootState) =>
  state.playerRatingReducer.attack;
export const selectDefence = (state: RootState) =>
  state.playerRatingReducer.defence;
export const selectPassing = (state: RootState) =>
  state.playerRatingReducer.passing;
export const selectIntelligence = (state: RootState) =>
  state.playerRatingReducer.intelligence;
export const selectAverage = (state: RootState) =>
  state.playerRatingReducer.average;
export const selectOverallAttack = (state: RootState) =>
  state.playerRatingReducer.overallAttack;
export const selectOverallDefence = (state: RootState) =>
  state.playerRatingReducer.overallDefence;
export const selectOverallPassing = (state: RootState) =>
  state.playerRatingReducer.overallPassing;
export const selectOverallIntelligence = (state: RootState) =>
  state.playerRatingReducer.overallIntelligence;
export const selectOverallAverage = (state: RootState) =>
  state.playerRatingReducer.overallAverage;
export const selectIsEditingPlayerRating = (state: RootState) =>
  state.playerRatingReducer.isEditingPlayerRating;

export const playerRatingReducer = playerRatingSlice.reducer;
