import {
  ClubProps,
  CountryProps,
  PlayerFilterState,
  PositionProps,
} from "./playerFilters.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState: PlayerFilterState = {
  clubs: [],
  countries: [],
  positionsIds: [],
  selectedClubIds: [-1],
  selectedCountryIds: [-1],
  selectedPositionIds: [-1],
};

export const playerFiltersSlice = createSlice({
  name: "playerFilters",
  initialState,
  reducers: {
    setClubs: (state, action: PayloadAction<ClubProps[]>) => {
      state.clubs = action.payload;
    },
    setCountries: (state, action: PayloadAction<CountryProps[]>) => {
      state.countries = action.payload;
    },
    setPositions: (state, action: PayloadAction<PositionProps[]>) => {
      state.positions = action.payload;
    },
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

export const {
  setClubs,
  setCountries,
  setPositions,
  setPositionFilters,
  setCountryFilters,
  setClubFilters,
} = playerFiltersSlice.actions;

export const selectedClubIds = (state: RootState) =>
  state.playerFiltersReducer.selectedClubIds;

export const selectedCountryIds = (state: RootState) =>
  state.playerFiltersReducer.selectedCountryIds;

export const selectedPositions = (state: RootState) =>
  state.playerFiltersReducer.selectedPositionIds;

export const playerFiltersReducer = playerFiltersSlice.reducer;
