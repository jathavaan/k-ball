import { PlayerFilterState } from "./playerFilters.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState: PlayerFilterState = {
  selectedClubIds: [-1],
  selectedCountryIds: [-1],
  selectedPositionIds: [-1],
};

export const playerFiltersSlice = createSlice({
  name: "playerFilters",
  initialState,
  reducers: {
    setPositionFilters: (state, action: PayloadAction<number[]>) => {
      state.selectedPositionIds = action.payload;
    },
    setCountryFilters: (state, action: PayloadAction<number[]>) => {
      state.selectedCountryIds = action.payload;
    },
    setClubFilters: (state, action: PayloadAction<number[]>) => {
      state.selectedClubIds = action.payload;
    },
  },
});

export const { setPositionFilters, setCountryFilters, setClubFilters } =
  playerFiltersSlice.actions;

export const selectedClubIds = (state: RootState) =>
  state.playerFiltersReducer.selectedClubIds;

export const selectedCountryIds = (state: RootState) =>
  state.playerFiltersReducer.selectedCountryIds;

export const selectedPositions = (state: RootState) =>
  state.playerFiltersReducer.selectedPositionIds;

export const playerFiltersReducer = playerFiltersSlice.reducer;
