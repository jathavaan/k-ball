import { AppDispatch } from "../../store.ts";
import { useDispatch } from "react-redux";
import { setSearch } from "./searchbar.slice.ts";

export const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const triggerSearch = (query: string) => {
    dispatch(setSearch(query));
  };

  return { triggerSearch };
};
