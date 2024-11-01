import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { usePlayerCards } from "./playerCardGrid.query";
import {
  setPlayerCardsG,
  addPlayerCards,
  setCurrentPage,
  setTotalPages,
  setLoading,
  resetGrid,
  setError,
  selectPlayerCards,
  selectCurrentPage,
  selectTotalPages,
  selectLoading,
  selectError,
} from "./playerCardGrid.slice";
import { PlayerCardBase } from "./playerCard.types";

export const usePlayerCardGrid = (
  page: number,
  limit: number,
  search: string,
  clubIds: number[],
  countryIds: number[],
  positionIds: number[],
  sortBy: string,
  sortOrder: string,
) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, isError, isLoading } = usePlayerCards(
    page,
    limit,
    search,
    clubIds,
    countryIds,
    positionIds,
    sortBy,
    sortOrder,
  );

  const playerCards = useSelector(selectPlayerCards);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (data) {
      dispatch(setPlayerCardsG(data.playerCards));
      dispatch(setTotalPages(data.totalPages));
      dispatch(setCurrentPage(page));
    }
  }, [data, dispatch, page]);

  //funksjon for å sette spillere -
  const loadPlayers = (players: PlayerCardBase[], totalPageCount: number) => {
    dispatch(setLoading(true));
    dispatch(setPlayerCardsG(players));
    dispatch(setTotalPages(totalPageCount));
    dispatch(setCurrentPage(1));
    dispatch(setLoading(false));
  };

  // for å legge til flere spillere, til infinite scroll
  const loadMorePlayers = (newPlayers: PlayerCardBase[], newPage: number) => {
    if (newPage <= totalPages) {
      dispatch(setLoading(true));
      dispatch(addPlayerCards(newPlayers));
      dispatch(setCurrentPage(newPage));
      dispatch(setLoading(false));
    }
  };

  const loadGrid = () => {
    dispatch(resetGrid());
  };

  /*  useEffect(() => {
      const initialPlayers: PlayerCardBase[] = [
        //hente fra API senere 
      ]
      const totalPageCount = 5; //eksempel
      loadPlayers(initialPlayers, totalPageCount);
    }, []); */

  return {
    playerCards,
    currentPage,
    totalPages,
    isError,
    isLoading,
    loadPlayers,
    loadMorePlayers,
    loadGrid,
  };
};
