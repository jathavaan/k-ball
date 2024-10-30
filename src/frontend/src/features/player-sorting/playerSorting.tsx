import { MenuItem } from "@mui/material";
import {
  StyledSortContainer,
  StyledSortSelect,
} from "./playerSorting.style.ts";
import { useSorting } from "./playerSorting.hooks.ts";

export const PlayerSorting = () => {
  const { sortBy, sortOrder, updateSortBy, updateSortOrder } = useSorting();

  return (
    <StyledSortContainer>
      <StyledSortSelect value={`${sortBy}_${sortOrder}`} variant="standard">
        <MenuItem
          value="name_asc"
          onClick={() => {
            updateSortBy("name");
            updateSortOrder("asc");
          }}
        >
          Name (A-Z)
        </MenuItem>
        <MenuItem
          value="name_desc"
          onClick={() => {
            updateSortBy("name");
            updateSortOrder("desc");
          }}
        >
          Name (Z-A)
        </MenuItem>
        <MenuItem
          value="rating_asc"
          onClick={() => {
            updateSortBy("rating");
            updateSortOrder("asc");
          }}
        >
          Rating (ASC)
        </MenuItem>
        <MenuItem
          value="rating_desc"
          onClick={() => {
            updateSortBy("rating");
            updateSortOrder("desc");
          }}
        >
          Rating (DESC)
        </MenuItem>
      </StyledSortSelect>
    </StyledSortContainer>
  );
};
