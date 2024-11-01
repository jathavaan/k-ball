import {
  StyledSortContainer,
  StyledToggleButtonGroup,
} from "./playerSorting.style.ts";
import { useSorting } from "./playerSorting.hooks.ts";
import { ToggleButton } from "@mui/material";
import { StyledHelperText } from "../ui";

export const PlayerSorting = () => {
  const { sortBy, sortOrder, toggleSort } = useSorting();

  return (
    <StyledSortContainer>
      <StyledHelperText>Sort by name</StyledHelperText>
      <StyledToggleButtonGroup
        value={`${sortBy}_${sortOrder}`}
        exclusive
        aria-label="text alignment"
      >
        <ToggleButton
          value="fullName_ASC"
          selected={sortBy === "fullName" && sortOrder === "ASC"}
          onClick={() => toggleSort("fullName", "ASC")}
          aria-label="sort by name ascending"
        >
          A - Z
        </ToggleButton>
        <ToggleButton
          value="fullName_DESC"
          selected={sortBy === "fullName" && sortOrder === "DESC"}
          onClick={() => toggleSort("fullName", "DESC")}
          aria-label="sort by name descending"
        >
          Z - A
        </ToggleButton>
      </StyledToggleButtonGroup>
    </StyledSortContainer>
  );
};
