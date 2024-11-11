import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { usePlayerCards } from "./playerCardGrid.query";
import { useRef } from "react";
import {
  setPlayerCardsGrid,
  addPlayerCards,
  setCurrentPage,
  setTotalPages,
  addLoadedPages,
  clearLoadedPages,
  selectPlayerCards,
  selectCurrentPage,
  selectTotalPages,
  selectLoadedPages,
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
  const loadedPages = useSelector(selectLoadedPages);

  useEffect(() => {
    if (data) {
      if (currentPage === 1) {
        dispatch(setPlayerCardsGrid(data.playerCards));
      } else if (!loadedPages.includes(currentPage)) {
        dispatch(addPlayerCards(data.playerCards));
      }
      dispatch(setTotalPages(data.totalPages));
      dispatch(setCurrentPage(page));

      dispatch(addLoadedPages(currentPage));
    }
  }, [data, dispatch, currentPage, page]);

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
      dispatch(clearLoadedPages());
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
