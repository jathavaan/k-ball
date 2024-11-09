import { useDispatch, useSelector } from "react-redux";
import {
  selectSortBy,
  selectSortOrder,
  setSelectedSortValue,
  setSortOrder,
} from "./playerSorting.slice";
import { AppDispatch } from "../../store.ts";

export const useSorting = () => {
  const dispatch = useDispatch<AppDispatch>();
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

    dispatch(setSelectedSortValue(`${field}_${sortOrder}`));
  };

  return { sortBy, sortOrder, toggleSort };
};
