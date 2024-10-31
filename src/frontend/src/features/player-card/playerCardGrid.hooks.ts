import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  setPlayerCardsG,
  addPlayerCards,
  setCurrentPage,
  setTotalPages,
  setLoading,
  setError,
  selectPlayerCards,
  selectCurrentPage,
  selectTotalPages,
  selectLoading,
  selectError,
} from "./playerCardGrid.slice";
import { PlayerCardBase } from "./playerCard.types";

export const usePlayerCardGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  const playerCards = useSelector(selectPlayerCards);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  //funksjon for å sette spillere -
  const loadPlayers = (players: PlayerCardBase[], totalPageCount: number) => {
    dispatch(setLoading(true));
    dispatch(setPlayerCardsG(players));
    dispatch(setTotalPages(totalPageCount));
    dispatch(setCurrentPage(1));
    dispatch(setLoading(false));
  };
};
