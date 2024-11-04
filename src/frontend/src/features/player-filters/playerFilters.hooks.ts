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
import { useCount } from "./playerFilters.query.ts";
import { selectSearchQuery } from "../searchbar/searchbar.slice.ts";

export const useClubSelection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { clubIds } = useSelector(selectTempFilters);

  const toggleSelection = (clubId: number) => {
    const isSelected = clubIds.includes(clubId);
    let updatedClubIds;

    if (isSelected) {
      updatedClubIds = clubIds.filter((id: number) => id !== clubId);
    } else if (clubId === -1) {
      updatedClubIds = [-1];
    } else {
      updatedClubIds = [...clubIds.filter((id: number) => id !== -1), clubId];
    }

    if (updatedClubIds.length === 0) {
      updatedClubIds = [-1];
    }

    dispatch(setTempClubFilters(updatedClubIds));
  };

  return { clubIds, toggleSelection };
};

export const usePositionSelection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { positionIds } = useSelector(selectTempFilters);

  const toggleSelection = (positionId: number) => {
    const isSelected = positionIds.includes(positionId);
    let updatedPositions;

    if (isSelected) {
      updatedPositions = positionIds.filter((id: number) => id !== positionId);
    } else if (positionId === -1) {
      updatedPositions = [-1];
    } else {
      updatedPositions = [
        ...positionIds.filter((id: number) => id !== -1),
        positionId,
      ];
    }

    if (updatedPositions.length === 0) {
      updatedPositions = [-1];
    }

    dispatch(setTempPositionFilters(updatedPositions));
  };

  return { positionIds, toggleSelection };
};

export const useCountrySelection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { countryIds } = useSelector(selectTempFilters);

  const toggleSelection = (countryId: number) => {
    const isSelected = countryIds.includes(countryId);
    let updatedCountryIds;

    if (isSelected) {
      updatedCountryIds = countryIds.filter((id: number) => id !== countryId);
    } else if (countryId === -1) {
      updatedCountryIds = [-1];
    } else {
      updatedCountryIds = [
        ...countryIds.filter((id: number) => id !== -1),
        countryId,
      ];
    }

    if (updatedCountryIds.length === 0) {
      updatedCountryIds = [-1];
    }

    dispatch(setTempCountryFilters(updatedCountryIds));
  };

  return { countryIds, toggleSelection };
};

export const useFilteredCount = () => {
  const search = useSelector(selectSearchQuery);
  let { clubIds, countryIds, positionIds } = useSelector(selectTempFilters);
  [clubIds, countryIds, positionIds] = [clubIds, countryIds, positionIds].map(
    (ids) => (ids.includes(-1) ? [] : ids),
  );
  console.log("clubIds", clubIds);
  console.log("countryIds", countryIds);
  console.log("positionIds", positionIds);
  console.log("search", search);

  const { data, isLoading, isError } = useCount(
    1, // Page number
    10, // Limit
    search, // Search term
    clubIds,
    countryIds,
    positionIds,
    "", // Sort by (can be updated based on needs)
    "", // Sort order
  );

  console.log("totalpage hooks", data);
  return { count: data?.totalPlayers ?? 0, isLoading, isError };
};

export const useApplyFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hasChanges = useSelector(selectHasChanges);

  const applyFiltersChanges = () => {
    if (hasChanges) {
      dispatch(applyFilters());
    }
  };

  return { hasChanges, applyFiltersChanges };
};
