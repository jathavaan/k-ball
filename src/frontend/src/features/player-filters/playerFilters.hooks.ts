import { AppDispatch } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedClubIds,
  selectedCountryIds,
  selectedPositions,
  setClubFilters,
  setCountryFilters,
  setPositionFilters,
} from "./playerFilters.slice.ts";

export const useClubSelection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const clubIds = useSelector(selectedClubIds);

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

    dispatch(setClubFilters(updatedClubIds));
  };

  return { clubIds, toggleSelection };
};

export const usePositionSelection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const positionsIds = useSelector(selectedPositions);

  const toggleSelection = (positionId: number) => {
    const isSelected = positionsIds.includes(positionId);
    let updatedPositions;

    if (isSelected) {
      updatedPositions = positionsIds.filter((id: number) => id !== positionId);
    } else if (positionId === -1) {
      updatedPositions = [-1];
    } else {
      updatedPositions = [
        ...positionsIds.filter((id: number) => id !== -1),
        positionId,
      ];
    }

    if (updatedPositions.length === 0) {
      updatedPositions = [-1];
    }

    dispatch(setPositionFilters(updatedPositions));
  };

  return { positionsIds, toggleSelection };
};

export const useCountrySelection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countryIds = useSelector(selectedCountryIds);

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

    dispatch(setCountryFilters(updatedCountryIds));
  };

  return { countryIds, toggleSelection };
};
