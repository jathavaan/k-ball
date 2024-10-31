import { useDispatch, useSelector } from "react-redux";
import {
  selectSortBy,
  selectSortOrder,
  setSortBy,
  setSortOrder,
} from "./playerSorting.slice";

export const useSorting = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);

  const toggleSort = (field: "name" | "rating", newOrder?: "asc" | "desc") => {
    if (field === sortBy && newOrder === sortOrder) {
      dispatch(setSortOrder(sortOrder === "asc" ? "desc" : "asc"));
    } else {
      dispatch(setSortOrder(newOrder || "asc"));
    }
    dispatch(setSortBy(field));
  };

  return { sortBy, sortOrder, toggleSort };
};
