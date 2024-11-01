import { PlayerFilterState } from "./playerFilters.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState: PlayerFilterState = {
  selectedClubIds: [-1],
  selectedCountryIds: [-1],
  selectedPositionIds: [-1],
  tempClubIds: [-1],
  tempCountryIds: [-1],
  tempPositionIds: [-1],
};

export const playerFiltersSlice = createSlice({
  name: "playerFilters",
  initialState,
  reducers: {
    setTempPositionFilters: (state, action: PayloadAction<number[]>) => {
      state.tempPositionIds = action.payload;
    },
    setTempCountryFilters: (state, action: PayloadAction<number[]>) => {
      state.tempCountryIds = action.payload;
    },
    setTempClubFilters: (state, action: PayloadAction<number[]>) => {
      state.tempClubIds = action.payload;
    },
    applyFilters: (state) => {
      state.selectedClubIds = state.tempClubIds;
      state.selectedCountryIds = state.tempCountryIds;
      state.selectedPositionIds = state.tempPositionIds;
    },
  },
});

export const {
  setTempPositionFilters,
  setTempCountryFilters,
  setTempClubFilters,
  applyFilters,
} = playerFiltersSlice.actions;

//for komponenter å hente siste valgene
export const selectTempFilters = (state: RootState) => ({
  clubIds: state.playerFiltersReducer.tempClubIds,
  countryIds: state.playerFiltersReducer.tempCountryIds,
  positionIds: state.playerFiltersReducer.tempPositionIds,
});
//til aktivering og deaktivering av knapp, returnerer en true/false
//jason stringify for sammenligning av arrays-ene
export const selectHasChanges = (state: RootState) => {
  const {
    tempClubIds,
    tempCountryIds,
    tempPositionIds,
    selectedClubIds,
    selectedCountryIds,
    selectedPositionIds,
  } = state.playerFiltersReducer;
  return (
    JSON.stringify(tempClubIds) !== JSON.stringify(selectedClubIds) ||
    JSON.stringify(tempCountryIds) !== JSON.stringify(selectedCountryIds) ||
    JSON.stringify(tempPositionIds) !== JSON.stringify(selectedPositionIds)
  );
};
export const playerFiltersReducer = playerFiltersSlice.reducer;
