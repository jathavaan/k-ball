import {
  StyledSortContainer,
  StyledToggleButtonGroup,
} from "./playerSorting.style.ts";
import { useSorting } from "./playerSorting.hooks.ts";
import { ToggleButton } from "@mui/material";
import { HelperText } from "../ui";

export const PlayerSorting = () => {
  const { sortBy, sortOrder, setSort } = useSorting();
  return (
    <StyledSortContainer>
      <HelperText description="Sort by name" />
      <StyledToggleButtonGroup
        value={`${sortBy}_${sortOrder}`}
        exclusive
        aria-label="Sort filter"
      >
        <ToggleButton
          key="fullName_ASC"
          value="fullName_ASC"
          selected={sortBy === "fullName" && sortOrder === "ASC"}
          onClick={() => setSort("fullName", "ASC")}
          aria-label="Sort by name ascending"
        >
          A - Z
        </ToggleButton>
        <ToggleButton
          key="fullName_DESC"
          value="fullName_DESC"
          selected={sortBy === "fullName" && sortOrder === "DESC"}
          onClick={() => setSort("fullName", "DESC")}
          aria-label="Sort by name descending"
        >
          Z - A
        </ToggleButton>
      </StyledToggleButtonGroup>
    </StyledSortContainer>
  );
};
