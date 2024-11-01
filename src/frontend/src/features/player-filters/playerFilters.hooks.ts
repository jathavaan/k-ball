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

  const updateTempFilters = (
    filterType: string,
    ids: number[],
    allIds: number[],
  ) => {
    // Hvis ingen elementer er valgt, eller hvis alle elementer er valgt, sett til [-1]
    if (ids.length === 0 || ids.length === allIds.length) {
      ids = [-1];
    }

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
