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
      <StyledSortLabel variant="subtitle1">Sort by name:</StyledSortLabel>
      <StyledToggleButtonGroup
        value={`${sortBy}_${sortOrder}`}
        exclusive
        aria-label="text alignment"
      >
        <ToggleButton
          value="fullName_DESC"
          selected={sortBy === "fullName" && sortOrder === "DESC"}
          onClick={() => toggleSort("fullName", "DESC")}
          aria-label="sort by name descending"
        >
          A - Z
        </ToggleButton>
        <ToggleButton
          value="fullName_ASC"
          selected={sortBy === "fullName" && sortOrder === "ASC"}
          onClick={() => toggleSort("fullName", "ASC")}
          aria-label="sort by name ascending"
        >
          Z - A
        </ToggleButton>
      </StyledToggleButtonGroup>
    </SortContainer>
  );
};
