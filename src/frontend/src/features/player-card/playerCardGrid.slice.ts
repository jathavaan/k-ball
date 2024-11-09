import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PlayerCardBase } from "./playerCard.types";

interface PlayerCardGridState {
  playerCards: PlayerCardBase[];
  currentPage: number;
  totalPages: number;
  loadedPages: number[];
}

const initialState: PlayerCardGridState = {
  playerCards: [],
  currentPage: 1,
  totalPages: 1,
  loadedPages: [1],
};

const playerCardGridSlice = createSlice({
  name: "playerCardGrid",
  initialState,
  reducers: {
    setPlayerCardsGrid: (state, action: PayloadAction<PlayerCardBase[]>) => {
      state.playerCards = action.payload;
    },

    addPlayerCards: (state, action: PayloadAction<PlayerCardBase[]>) => {
      state.playerCards = [...state.playerCards, ...action.payload];
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },

    addLoadedPages: (state, action: PayloadAction<number>) => {
      if (!state.loadedPages.includes(action.payload)) {
        state.loadedPages.push(action.payload);
      }
    },

    clearLoadedPages: (state) => {
      state.loadedPages = [1];
    },
  },
});

export const {
  setPlayerCardsGrid,
  addPlayerCards,
  setCurrentPage,
  setTotalPages,
  addLoadedPages,
  clearLoadedPages,
} = playerCardGridSlice.actions;

export const selectPlayerCards = (state: RootState) =>
  state.playerCardGridReducer.playerCards;
export const selectCurrentPage = (state: RootState) =>
  state.playerCardGridReducer.currentPage;
export const selectTotalPages = (state: RootState) =>
  state.playerCardGridReducer.totalPages;
export const selectLoadedPages = (state: RootState) =>
  state.playerCardGridReducer.loadedPages;

export const playerCardGridReducer = playerCardGridSlice.reducer;
