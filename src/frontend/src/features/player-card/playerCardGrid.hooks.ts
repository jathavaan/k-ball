import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { usePlayerCards } from "./playerCardGrid.query";
import { useRef } from "react";
import {
  setPlayerCardsG,
  addPlayerCards,
  setCurrentPage,
  setTotalPages,
  selectPlayerCards,
  selectCurrentPage,
  selectTotalPages,
} from "./playerCardGrid.slice";

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

  const currentPage = useSelector(selectCurrentPage);

  const { data, isError, isLoading } = usePlayerCards(
    currentPage,
    limit,
    search,
    clubIds,
    countryIds,
    positionIds,
    sortBy,
    sortOrder,
  );

  const playerCards = useSelector(selectPlayerCards);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (data) {
      if (currentPage === 1) {
        dispatch(setPlayerCardsG(data.playerCards));
      } else {
        dispatch(addPlayerCards(data.playerCards));
      }
      dispatch(setTotalPages(data.totalPages));
      dispatch(setCurrentPage(page));
    }
  }, [data, dispatch, page]);

  const prevFilters = useRef<string>("");

  const currentFilters = JSON.stringify({
    search,
    clubIds,
    countryIds,
    positionIds,
    sortBy,
    sortOrder,
  });

  useEffect(() => {
    if (prevFilters.current && prevFilters.current !== currentFilters) {
      dispatch(setCurrentPage(1));
    }

    prevFilters.current = currentFilters;
  }, [currentFilters, dispatch]);

  const loadMorePlayers = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return {
    playerCards,
    currentPage,
    totalPages,
    isError,
    isLoading,
    loadMorePlayers,
  };
};
