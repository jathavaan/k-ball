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

  const toggleSort = (
    field: "fullName" | "rating",
    newOrder?: "ASC" | "DESC",
  ) => {
    if (field === sortBy && newOrder === sortOrder) {
      dispatch(setSortOrder(sortOrder === "ASC" ? "DESC" : "ASC"));
    } else {
      dispatch(setSortOrder(newOrder || "ASC"));
    }
    dispatch(setSortBy(field));
  };

  return { sortBy, sortOrder, toggleSort };
};
