import {
  StyledClearIcon,
  StyledGrid,
  StyledIconButton,
  StyledSearchIcon,
  StyledSearchOffIcon,
  StyledSearchTextInput,
} from "@features/searchbar/searchbar.style";
import { useSearch } from "@features/searchbar/searchbar.hooks.ts";
import Grid from "@mui/material/Grid2";
import { HelperErrorText } from "@features/ui";

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
    <StyledGrid
      container
      spacing={0}
      sx={{
        display: "flex",
        padding: 0,
        height: "100%",
        alignItems: "flex-end",
      }}
    >
      <Grid
        size={{ xs: 8, md: 10 }}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent:
            searchQuery && searchResultCount === 0
              ? "space-between"
              : "flex-end",
        }}
      >
        {searchQuery &&
        searchResultCount !== undefined &&
        searchResultCount === 0 ? (
          <HelperErrorText description="No results" />
        ) : null}
        <StyledSearchTextInput
          value={localSearchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for name..."
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 2, md: 1 }}>
        {localSearchQuery ? (
          <StyledIconButton onClick={handleClear}>
            <StyledClearIcon aria-label="clear" />
          </StyledIconButton>
        ) : null}
      </Grid>
      <Grid size={{ xs: 2, md: 1 }}>
        {searchQuery && searchResultCount !== undefined ? (
          <StyledIconButton
            aria-label="search"
            disableTouchRipple
            disabled={searchResultCount === 0}
            onClick={handleSearch}
          >
            {searchResultCount > 0 ? (
              <StyledSearchIcon aria-label="search" />
            ) : (
              <StyledSearchOffIcon aria-label="disabled search" />
            )}
          </StyledIconButton>
        ) : null}
      </Grid>
    </StyledGrid>
  );
};
