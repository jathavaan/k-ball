import { ProfileMenuState } from "./profileMenu.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState: ProfileMenuState = {
  isProfileMenuOpen: false,
  isProfileInfoExpanded: true,
  isRatingsExpanded: false,
};

const profileMenuSlice = createSlice({
  name: "profileMenu",
  initialState,
  reducers: {
    setIsProfileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isProfileMenuOpen = action.payload;
    },
    setIsProfileInfoExpanded: (state, action: PayloadAction<boolean>) => {
      state.isProfileInfoExpanded = action.payload;
    },
    setIsRatingsExpanded: (state, action: PayloadAction<boolean>) => {
      state.isRatingsExpanded = action.payload;
    },
  },
});

export const {
  setIsProfileMenuOpen,
  setIsProfileInfoExpanded,
  setIsRatingsExpanded,
} = profileMenuSlice.actions;

export const selectIsProfileMenuOpen = (state: RootState) =>
  state.profileMenuReducer.isProfileMenuOpen;
export const selectIsProfileInfoExpanded = (state: RootState) =>
  state.profileMenuReducer.isProfileInfoExpanded;
export const selectIsRatingsExpanded = (state: RootState) =>
  state.profileMenuReducer.isRatingsExpanded;

export const profileMenuReducer = profileMenuSlice.reducer;
