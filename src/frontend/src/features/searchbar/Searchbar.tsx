import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchButton,
  StyledClearButton,
} from "./searchbar.style";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useSearch } from "./searchbar.hooks.ts";
import { selectSearchQuery, setTempSearch } from "./searchbar.slice.ts";
import { AppDispatch } from "../../store.ts";

export const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(selectSearchQuery);
  const [localQuery, setLocalQuery] = useState(searchQuery); // Search is local until the user submits search
  const { triggerSearch } = useSearch();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handleSearch = () => {
    if (localQuery) {
      triggerSearch(localQuery);
    }
  };

  const handleClear = () => {
    setLocalQuery("");
    dispatch(setTempSearch(""));
    triggerSearch("");
    setHasUserInteracted(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(event.target.value);
    setHasUserInteracted(true);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setTempSearch(localQuery));
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [localQuery, dispatch]);

  return (
    <StyledSearchContainer>
      <StyledSearchInput
        value={localQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
        placeholder="Search..."
      />

      {hasUserInteracted && searchQuery !== "" && (
        <StyledClearButton aria-label="clear" onClick={handleClear}>
          <ClearIcon />
        </StyledClearButton>
      )}
      <StyledSearchButton aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </StyledSearchButton>
    </StyledSearchContainer>
  );
};
