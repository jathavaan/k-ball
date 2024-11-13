import {
  StyledClearButton,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchInput,
} from "./searchbar.style";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useSearch } from "./searchbar.hooks.ts";

export const SearchBar = () => {
  const {
    localSearchQuery,
    searchQuery,
    searchResultCount,
    handleChange,
    handleKeyDown,
    handleClear,
    handleSearch,
  } = useSearch();

  return (
    <StyledSearchContainer>
      <StyledSearchInput
        value={localSearchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
        placeholder="Search for name..."
      />

      {searchQuery && (
        <StyledClearButton aria-label="clear" onClick={handleClear}>
          <ClearIcon />
        </StyledClearButton>
      )}
      {searchQuery && searchResultCount > 0 && (
        <StyledSearchButton aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </StyledSearchButton>
      )}
    </StyledSearchContainer>
  );
};
