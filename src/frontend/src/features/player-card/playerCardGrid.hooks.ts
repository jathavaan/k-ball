import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { usePlayerCards } from "./playerCardGrid.query";
import {
  addLoadedPages,
  addPlayerCards,
  clearLoadedPages,
  selectCurrentPage,
  selectLoadedPages,
  selectPlayerCards,
  selectShowScrollToTopButton,
  selectTotalPages,
  setCurrentPage,
  setPlayerCardsGrid,
  setShowScrollToTopButton,
  setTotalPages,
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

export const useScrollToTopButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const showScrollToTopButton = useSelector(selectShowScrollToTopButton);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      dispatch(setShowScrollToTopButton(true));
    } else {
      dispatch(setShowScrollToTopButton(false));
    }
  };

  const handleScrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { showScrollToTop: showScrollToTopButton, handleScrollToTop };
};
