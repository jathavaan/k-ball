import { useDispatch, useSelector } from "react-redux";
import {
  selectSortBy,
  selectSortOrder,
  setSortOrder,
} from "./playerSorting.slice";

export const useSorting = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);

  const toggleSort = (
    field: "fullName" | "rating",
    newOrder?: "DESC" | "ASC",
  ) => {
    if (field === sortBy && newOrder === sortOrder) {
      dispatch(setSortOrder(sortOrder === "DESC" ? "ASC" : "DESC"));
    } else {
      dispatch(setSortOrder(newOrder || "DESC"));
    }
  };

  return { sortBy, sortOrder, toggleSort };
};
