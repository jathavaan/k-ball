import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectAttack,
  selectDefence,
  selectIntelligence,
  selectPassing,
  setAttack,
  setAverage,
  setDefence,
  setIntelligence,
  setIsEditingPlayerRating,
  setOverallAttack,
  setOverallAverage,
  setOverallDefence,
  setOverallIntelligence,
  setOverallPassing,
  setPassing,
} from "./playerRating.slice";
import { getLoggedInUser } from "../auth/auth.hooks";
import { AppDispatch } from "../../store.ts";
import {
  useOverallRating,
  useSaveUserRating,
  useUserRating,
} from "./playerRating.query.ts";

const calculateAverageRating = (
  attack: number,
  defence: number,
  passing: number,
  intelligence: number,
) => (attack + defence + passing + intelligence) / 4;

export const usePlayerRating = (playerId: number) => {
  const userId = getLoggedInUser();
  if (!userId) throw new Error("Failed to get user ID");
  const dispatch = useDispatch<AppDispatch>();
  const attack = useSelector(selectAttack);
  const defence = useSelector(selectDefence);
  const passing = useSelector(selectPassing);
  const intelligence = useSelector(selectIntelligence);

  const {
    mutate: mutateOverallRating,
    data: overallRating,
    isError: isOverallRatingError,
    isPending: isOverallRatingPending,
  } = useOverallRating(playerId);

  const {
    data: userRating,
    isLoading: isUserRatingLoading,
    isError: isUserRatingError,
  } = useUserRating(playerId, userId);

  const {
    mutate: mutateSaveUserRating,
    isPending: isSaveUserRatingPending,
    isError: isSaveUserRatingError,
  } = useSaveUserRating(playerId, userId, {
    attack: attack ?? 0,
    defence: defence ?? 0,
    passing: passing ?? 0,
    intelligence: intelligence ?? 0,
    average: null,
  });

  const handleSaveChanges = () => {
    mutateSaveUserRating(undefined, {
      onSuccess: () => {
        mutateOverallRating(undefined, {
          onSettled: (overallRating) => {
            if (!overallRating) return;
            dispatch(setOverallAttack(overallRating.attack));
            dispatch(setOverallDefence(overallRating.defence));
            dispatch(setOverallIntelligence(overallRating.intelligence));
            dispatch(setOverallPassing(overallRating.passing));
            dispatch(setOverallAverage(overallRating.average));
          },
        });
      },
    });
    dispatch(setIsEditingPlayerRating(false));
  };

  useEffect(() => {
    mutateOverallRating();
  }, [mutateOverallRating]);

  useEffect(() => {
    if (!userRating) return;
    dispatch(setAttack(userRating.attack));
    dispatch(setDefence(userRating.defence));
    dispatch(setPassing(userRating.passing));
    dispatch(setIntelligence(userRating.intelligence));
  }, [dispatch, userRating]);

  return {
    overallRating,
    isOverallRatingPending,
    isOverallRatingError,
    isUserRatingLoading,
    isUserRatingError,
    isSaveUserRatingPending,
    isSaveUserRatingError,
    handleSaveChanges,
  };
};

export const usePlayerRatingEdit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const attack = useSelector(selectAttack);
  const defence = useSelector(selectDefence);
  const passing = useSelector(selectPassing);
  const intelligence = useSelector(selectIntelligence);

  const handleAttackChange = (attack: number | null) => {
    dispatch(setAttack(attack));
  };

  const handleDefenceChange = (defence: number | null) => {
    dispatch(setDefence(defence));
  };

  const handlePassingChange = (passing: number | null) => {
    dispatch(setPassing(passing));
  };

  const handleIntelligenceChange = (intelligence: number | null) => {
    dispatch(setIntelligence(intelligence));
  };

  const onEditClick = () => {
    dispatch(setIsEditingPlayerRating(true));
  };

  useEffect(() => {
    if (!attack || !defence || !passing || !intelligence) {
      dispatch(setAverage(null));
    }

    const average = calculateAverageRating(
      attack!,
      defence!,
      passing!,
      intelligence!,
    );

    dispatch(setAverage(average));
  }, [attack, defence, dispatch, intelligence, passing]);

  return {
    handleAttackChange,
    handleDefenceChange,
    handlePassingChange,
    handleIntelligenceChange,
    onEditClick,
  };
};
