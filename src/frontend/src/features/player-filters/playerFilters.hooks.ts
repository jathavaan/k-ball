import { AppDispatch } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  setTempClubFilters,
  setTempCountryFilters,
  setTempPositionFilters,
  applyFilters,
  selectTempFilters,
  selectHasChanges,
} from "./playerFilters.slice.ts";

export const usePlayerFilters = () => {
  const dispatch = useDispatch();
  const hasChanges = useSelector(selectHasChanges);
  const { clubIds, countryIds, positionIds } = useSelector(selectTempFilters);

  const updateTempFilters = (filterType: string, ids: number[]) => {
    if (filterType === "club") dispatch(setTempClubFilters(ids));
    if (filterType === "country") dispatch(setTempCountryFilters(ids));
    if (filterType === "position") dispatch(setTempPositionFilters(ids));
  };

  const applyFilterChanges = () => {
    dispatch(applyFilters());
  };

  return {
    clubIds,
    countryIds,
    positionIds,
    hasChanges,
    updateTempFilters,
    applyFilterChanges,
  };
};
