import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PlayerCardBase } from "./playerCard.types";

interface PlayerCardGridState {
  playerCards: PlayerCardBase[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: PlayerCardGridState = {
  playerCards: [], //blir det riktig med tom liste
  currentPage: 1,
  totalPages: 1, //blir det riktig
  loading: false,
  error: null,
};

const playerCardGridSlice = createSlice({
  name: "playerCardGrid",
  initialState,
  //gir oss direkte kontroll over å oppdatere state når vi trenger
  reducers: {
    //samme som i playercard.slice
    //erstatter listen med data som sendes i action.payload
    //bruk: laster inn på nytt, ny liste gjennom filter ol
    setPlayerCardsG: (state, action: PayloadAction<PlayerCardBase[]>) => {
      state.playerCards = action.payload;
    },

    //legger til nye spillere nederst
    //bruk til infinite scroll
    addPlayerCards: (state, action: PayloadAction<PlayerCardBase[]>) => {
      state.playerCards = [...state.playerCards, ...action.payload];
    },

    //sett current page til verdien i action.payload
    //vet ikke egentlig om vi trenger den. Brukes til å endre sidenummer manuelt
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    //tilbakestilling av grid, ved refresh kanskje?
    resetGrid: (state) => {
      state.playerCards = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setPlayerCardsG,
  addPlayerCards,
  setCurrentPage,
  setTotalPages,
  setLoading,
  setError,
  resetGrid,
} = playerCardGridSlice.actions;

export const selectPlayerCards = (state: RootState) =>
  state.playerCardGridReducer.playerCards;
export const selectCurrentPage = (state: RootState) =>
  state.playerCardGridReducer.currentPage;
export const selectTotalPages = (state: RootState) =>
  state.playerCardGridReducer.totalPages;
export const selectLoading = (state: RootState) =>
  state.playerCardGridReducer.loading;
export const selectError = (state: RootState) =>
  state.playerCardGridReducer.error;

export const playerCardGridReducer = playerCardGridSlice.reducer;
