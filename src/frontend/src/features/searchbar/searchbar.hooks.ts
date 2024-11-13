import { AppDispatch } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocalSearchQuery,
  selectSearchQuery,
  selectSearchResultCount,
  setLocalSearchQuery,
  setSearchQuery,
} from "./searchbar.slice.ts";
import React, { useEffect } from "react";

export const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(selectSearchQuery);
  const localSearchQuery = useSelector(selectLocalSearchQuery);
  const searchResultCount = useSelector(selectSearchResultCount);

  const triggerSearch = (query: string) => {
    dispatch(setSearchQuery(query));
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

    if (newQuery === "" && searchQuery) {
      dispatch(setLocalSearchQuery(""));
      triggerSearch("");
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearchQuery(localSearchQuery));
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [localSearchQuery, dispatch]);

  return {
    localSearchQuery,
    searchQuery,
    searchResultCount,
    handleChange,
    handleKeyDown,
    handleClear,
    handleSearch,
  };
};
