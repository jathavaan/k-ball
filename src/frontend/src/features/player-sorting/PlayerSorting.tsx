import {
  StyledSortContainer,
  StyledToggleButtonGroup,
} from "./playerSorting.style.ts";
import { useSorting } from "./playerSorting.hooks.ts";
import { ToggleButton } from "@mui/material";
import { HelperText } from "../ui";
import { useSelector } from "react-redux";
import { selectSelectedSortValue } from "./playerSorting.slice.ts";

export const PlayerSorting = () => {
  const { sortBy, sortOrder, toggleSort } = useSorting();
  const selectedSortValue = useSelector(selectSelectedSortValue);

  return (
    <StyledSortContainer>
      <HelperText description="Sort players by name" />
      <StyledToggleButtonGroup
        value={`${sortBy}_${sortOrder}`}
        exclusive
        aria-label="Sort filter"
      >
        <ToggleButton
          key="fullName_ASC"
          value="fullName_ASC"
          selected={"fullName_ASC" === selectedSortValue}
          onClick={() => toggleSort("fullName", "ASC")}
          aria-label="Sort by name ascending"
        >
          A - Z
        </ToggleButton>
        <ToggleButton
          key="fullName_DESC"
          value="fullName_DESC"
          selected={"fullName_DESC" === selectedSortValue}
          onClick={() => toggleSort("fullName", "DESC")}
          aria-label="Sort by name descending"
        >
          Z - A
        </ToggleButton>
      </StyledToggleButtonGroup>
    </StyledSortContainer>
  );
};
