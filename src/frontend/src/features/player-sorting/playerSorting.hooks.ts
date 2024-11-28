import { useDispatch, useSelector } from "react-redux";
import {
  selectSortBy,
  selectSortOrder,
  setSortBy,
  setSortOrder,
} from "@features/player-sorting/playerSorting.slice";
import { AppDispatch } from "@/store.ts";

export const useSorting = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);

  const setSort = (field: "fullName" | "rating", order: "DESC" | "ASC") => {
    dispatch(setSortBy(field));
    dispatch(setSortOrder(order));
  };

  return { sortBy, sortOrder, setSort: setSort };
};
