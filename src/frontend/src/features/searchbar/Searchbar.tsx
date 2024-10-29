import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchButton,
  StyledClearButton,
} from "./searchbar.style";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useSearch } from "./searchbar.hooks.ts";
import { RootState } from "../../store.ts";

export const SearchBar = () => {
  const query = useSelector(
    (state: RootState) => state.searchbarReducer.search,
  ); // Retrieve the search term from Redux state
  const [localQuery, setLocalQuery] = useState(query); // Local search term until the user submits
  const { triggerSearch, searchPlayers } = useSearch(); // Get the search trigger and the API call logic

  // This function will handle the search when triggered
  const handleSearch = () => {
    if (localQuery) {
      triggerSearch(localQuery); // Update the Redux state
      searchPlayers(localQuery); // Trigger the API call only when search happens
    }
  };

  const handleClear = () => {
    setLocalQuery("");
    triggerSearch("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <StyledSearchContainer>
      <StyledSearchInput
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)} // Update the local state until the user presses search
        onKeyDown={handleKeyDown}
        variant="outlined"
        placeholder="Search for players by name..."
      />

      {localQuery && (
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
