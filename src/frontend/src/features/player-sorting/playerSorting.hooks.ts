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
      return;
    }
    if (field === sortBy) {
      dispatch(setSortOrder(sortOrder === "ASC" ? "DESC" : "ASC"));
    } else {
      // Hvis det er et nytt felt, setter det til "ASC" som standard
      dispatch(setSortBy(field));
      dispatch(setSortOrder(newOrder || "ASC"));
    }
  };

  return { sortBy, sortOrder, toggleSort };
};
