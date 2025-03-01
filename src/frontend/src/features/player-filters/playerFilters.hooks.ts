import { AppDispatch } from "@/store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  selectFilters,
  selectHasChanges,
  selectTempFilters,
  setTempClubFilters,
  setTempCountryFilters,
  setTempPositionFilters,
} from "@features/player-filters/playerFilters.slice.ts";
import { useCount } from "@features/player-filters/playerFilters.query.ts";
import {
  selectSearchQueryForCount,
  selectSearchResultCount,
  setSearchResultCount,
} from "@features/searchbar";
import { useEffect } from "react";

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
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector(selectSearchResultCount);
  const searchQueryForCount = useSelector(selectSearchQueryForCount);
  let { clubIds, countryIds, positionIds } = useSelector(selectTempFilters);
  [clubIds, countryIds, positionIds] = [clubIds, countryIds, positionIds].map(
    (ids) => (ids.includes(-1) ? [] : ids),
  );

  const { data, isLoading, isError } = useCount(
    searchQueryForCount,
    clubIds,
    countryIds,
    positionIds,
  );

  useEffect(() => {
    dispatch(setSearchResultCount(data?.totalPlayers));
  }, [data?.totalPlayers, dispatch]);

  return { count, isLoading, isError };
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

export const useClearFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { clubIds, countryIds, positionIds } = useSelector(selectTempFilters);
  const { selectedClubIds, selectedCountryIds, selectedPositionIds } =
    useSelector(selectFilters);
  const canClearFilters =
    clubIds[0] !== -1 ||
    countryIds[0] !== -1 ||
    positionIds[0] !== -1 ||
    selectedClubIds[0] !== -1 ||
    selectedCountryIds[0] !== -1 ||
    selectedPositionIds[0] !== -1;

  const clearFilters = () => {
    if (canClearFilters) {
      dispatch(setTempClubFilters([-1]));
      dispatch(setTempCountryFilters([-1]));
      dispatch(setTempPositionFilters([-1]));
      dispatch(applyFilters());
    }
  };
  return { canClearFilters, clearFilters };
};
