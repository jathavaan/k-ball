import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  SortContainer,
  StyledToggleButtonGroup,
  StyledSortLabel,
} from "./playerSorting.style.ts";
import { useSorting } from "./playerSorting.hooks.ts";
import { ToggleButton } from "@mui/material";

export const PlayerSorting = () => {
  const { sortBy, sortOrder, toggleSort } = useSorting();

  return (
    <SortContainer>
      <StyledSortLabel variant="subtitle1">Sort by:</StyledSortLabel>
      <StyledToggleButtonGroup
        value={`${sortBy}_${sortOrder}`}
        exclusive
        aria-label="text alignment"
      >
        <ToggleButton
          value="name_asc"
          selected={sortBy === "name" && sortOrder === "asc"}
          onClick={() => {
            toggleSort("name", "asc");
          }}
          aria-label="sort by name ascending"
        >
          A - Z
        </ToggleButton>
        <ToggleButton
          value="name_desc"
          selected={sortBy === "name" && sortOrder === "desc"}
          onClick={() => {
            toggleSort("name", "desc");
          }}
          aria-label="sort by name descending"
        >
          Z - A
        </ToggleButton>
        <ToggleButton
          value="rating_asc"
          selected={sortBy === "rating"}
          onClick={() => {
            toggleSort("rating", "asc");
          }}
          aria-label="sort by rating"
        >
          <StarBorderIcon />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </SortContainer>
  );
};
