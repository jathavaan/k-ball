import { MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledSortContainer,
  StyledSortSelect,
} from "./playerSorting.style.ts";
import {
  selectSortBy,
  selectSortOrder,
  setSortBy,
  setSortOrder,
} from "./playerSorting.slice.ts";

export const PlayerSorting = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);

  const handleSortByChange = (value: "name" | "rating") => {
    dispatch(setSortBy(value));
  };

  const handleSortOrderChange = (value: "asc" | "desc") => {
    dispatch(setSortOrder(value));
  };

  return (
    <StyledSortContainer>
      <StyledSortSelect value={`${sortBy}_${sortOrder}`} variant="standard">
        <MenuItem
          value="name_asc"
          onClick={() => {
            handleSortByChange("name");
            handleSortOrderChange("asc");
          }}
        >
          Name (A-Z)
        </MenuItem>
        <MenuItem
          value="name_desc"
          onClick={() => {
            handleSortByChange("name");
            handleSortOrderChange("desc");
          }}
        >
          Name (Z-A)
        </MenuItem>
        <MenuItem
          value="rating_asc"
          onClick={() => {
            handleSortByChange("rating");
            handleSortOrderChange("asc");
          }}
        >
          Rating (ASC)
        </MenuItem>
        <MenuItem
          value="rating_desc"
          onClick={() => {
            handleSortByChange("rating");
            handleSortOrderChange("desc");
          }}
        >
          Rating (DESC)
        </MenuItem>
      </StyledSortSelect>
    </StyledSortContainer>
  );
};
