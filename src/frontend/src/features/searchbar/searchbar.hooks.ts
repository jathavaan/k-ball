import { AppDispatch } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocalSearchQuery,
  selectSearchQuery,
  selectSearchQueryForCount,
  selectSearchResultCount,
  setLocalSearchQuery,
  setSearchQuery,
  setSearchQueryForCount,
} from "./searchbar.slice.ts";
import React, { useEffect } from "react";

export const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(selectSearchQuery);
  const searchQueryForCount = useSelector(selectSearchQueryForCount);
  const localSearchQuery = useSelector(selectLocalSearchQuery);
  const searchResultCount = useSelector(selectSearchResultCount);

  const triggerSearch = (query: string) => {
    dispatch(setSearchQueryForCount(query));
  };

  const handleSearch = () => {
    if (localSearchQuery) {
      triggerSearch(localSearchQuery);
    }
  };

  const handleClear = () => {
    dispatch(setLocalSearchQuery(""));
    triggerSearch("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    dispatch(setLocalSearchQuery(newQuery));

    if (newQuery === "" && searchQueryForCount) {
      dispatch(setLocalSearchQuery(""));
      triggerSearch("");
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearchQueryForCount(localSearchQuery));
    }, 100);

    return () => {
      clearTimeout(handler);
    };
  }, [localSearchQuery, dispatch, searchResultCount, searchQueryForCount]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchResultCount === 0) {
        return;
      }
      if (
        searchResultCount &&
        searchResultCount > 0 &&
        searchQuery !== searchQueryForCount
      ) {
        dispatch(setSearchQuery(localSearchQuery));
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [
    dispatch,
    localSearchQuery,
    searchQuery,
    searchQueryForCount,
    searchResultCount,
  ]);

  return {
    localSearchQuery,
    searchQuery: searchQueryForCount,
    searchResultCount,
    handleChange,
    handleKeyDown,
    handleClear,
    handleSearch,
  };
};
