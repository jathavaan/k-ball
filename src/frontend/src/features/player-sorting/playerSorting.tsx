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

export default function PlayerSorting() {
  /* const [sortBy, setSortBy] = React.useState("name");
  const [sortOrder, setSortOrder] = React.useState("asc");

  const handleSortChange = (event: SelectChangeEvent) => {
    const value = event.target.value;

    console.log("Value changed to:", value); 

    const [newSortBy, newSortOrder] = (value as string).split('_') as ["name" | "rating", "asc" | "desc"];

    console.log("New SortBy:", newSortBy);
    console.log("New SortOrder:", newSortOrder);

    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  }; */
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
}

{
  /* return (
    <StyledSortContainer>
      <StyledSortSelect
        value={`${sortBy}_${sortOrder}`}
        onChange={handleSortChange}
        displayEmpty
        inputProps={{ "aria-label": "Sort by" }}
      >
        <MenuItem value="name_asc">Name (A-Z)</MenuItem>
        <MenuItem value="name_desc">Name (Z-A)</MenuItem>
        <MenuItem value="rating_asc">Rating (ASC)</MenuItem>
        <MenuItem value="rating_desc">Rating (DESC)</MenuItem>
      </StyledSortSelect>
    </StyledSortContainer>
  ); */
}
