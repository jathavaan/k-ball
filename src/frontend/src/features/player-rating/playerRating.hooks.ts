import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  resetPlayerRating,
  selectAttack,
  selectDefence,
  selectIntelligence,
  selectIsEditingPlayerRating,
  selectPassing,
  setAttack,
  setAverage,
  setDefence,
  setIntelligence,
  setIsEditingPlayerRating,
  setIsPlayerRatingInDb,
  setOverallAttack,
  setOverallAverage,
  setOverallDefence,
  setOverallIntelligence,
  setOverallPassing,
  setPassing,
} from "@features/player-rating/playerRating.slice";
import { getLoggedInUser } from "@features/auth";
import { AppDispatch } from "@/store.ts";
import {
  useDeletePlayerRating,
  useOverallRating,
  useSaveUserRating,
  useUserRating,
} from "@features/player-rating/playerRating.query.ts";

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
    mutate: mutateUserRating,
    data: userRating,
    isPending: isUserRatingPending,
    isError: isUserRatingError,
  } = useUserRating(playerId, userId);

  const {
    mutate: mutateDeletePlayerRating,
    isPending: isDeletePlayerRatingPending,
    isError: isDeletePlayerRatingError,
  } = useDeletePlayerRating(playerId, userId);

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

        mutateUserRating(undefined, {
          onSettled: (userRating) => {
            if (!userRating) return;
            dispatch(setAttack(userRating.attack));
            dispatch(setDefence(userRating.defence));
            dispatch(setPassing(userRating.passing));
            dispatch(setIntelligence(userRating.intelligence));
            dispatch(setAverage(userRating.average));
          },
        });
      },
    });
    dispatch(setIsEditingPlayerRating(false));
  };

  const handleClear = () => {
    if (!userRating) {
      dispatch(resetPlayerRating());
      return;
    }

    dispatch(setAttack(userRating.attack));
    dispatch(setDefence(userRating.defence));
    dispatch(setPassing(userRating.passing));
    dispatch(setIntelligence(userRating.intelligence));
    dispatch(setAverage(userRating.average));
    dispatch(setIsEditingPlayerRating(false));
  };

  const handleDelete = () => {
    mutateDeletePlayerRating(undefined, {
      onSuccess: () => {
        dispatch(resetPlayerRating());
        dispatch(setIsEditingPlayerRating(false));

        mutateOverallRating();
        mutateUserRating(undefined, {
          onSuccess: () => {
            dispatch(setAttack(null));
            dispatch(setDefence(null));
            dispatch(setPassing(null));
            dispatch(setIntelligence(null));
            dispatch(setAverage(null));
          },
        });
      },
    });
  };

  useEffect(() => {
    mutateUserRating();
    mutateOverallRating();
  }, [mutateOverallRating, mutateUserRating]);

  useEffect(() => {
    mutateUserRating(undefined, {
      onSuccess: (userRating) => {
        if (userRating) {
          dispatch(setAttack(userRating.attack));
          dispatch(setDefence(userRating.defence));
          dispatch(setPassing(userRating.passing));
          dispatch(setIntelligence(userRating.intelligence));
          dispatch(setAverage(userRating.average));
          dispatch(setIsPlayerRatingInDb(true));
        }
      },
      onError: () => {
        dispatch(resetPlayerRating());
      },
    });

    mutateOverallRating(undefined, {
      onSuccess: (overallRating) => {
        if (overallRating) {
          dispatch(setOverallAttack(overallRating.attack));
          dispatch(setOverallDefence(overallRating.defence));
          dispatch(setOverallPassing(overallRating.passing));
          dispatch(setOverallIntelligence(overallRating.intelligence));
          dispatch(setOverallAverage(overallRating.average));
        }
      },
    });
  }, [dispatch, playerId]);

  return {
    overallRating,
    isOverallRatingPending,
    isOverallRatingError,
    userRating,
    isUserRatingLoading: isUserRatingPending,
    isUserRatingError,
    isSaveUserRatingPending,
    isSaveUserRatingError,
    isDeletePlayerRatingPending,
    isDeletePlayerRatingError,
    handleSaveChanges,
    handleClear,
    handleDelete,
  };
};

export const usePlayerRatingEdit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const attack = useSelector(selectAttack);
  const defence = useSelector(selectDefence);
  const passing = useSelector(selectPassing);
  const intelligence = useSelector(selectIntelligence);
  const isEditingPlayerRating = useSelector(selectIsEditingPlayerRating);

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
    dispatch(setIsEditingPlayerRating(!isEditingPlayerRating));
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
