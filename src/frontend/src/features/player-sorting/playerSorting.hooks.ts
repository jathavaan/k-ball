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

  const updateSortBy = (value: "name" | "rating") => {
    dispatch(setSortBy(value));
  };

  const updateSortOrder = (value: "asc" | "desc") => {
    dispatch(setSortOrder(value));
  };

  return { sortBy, sortOrder, updateSortBy, updateSortOrder };
};
