import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setOverallRating, setUserRating } from "./playerRating.slice";
import {
  useOverallRating,
  useUserRating,
  useSaveUserRating,
} from "./playerRating.query";
import { getLoggedInUser } from "../auth/auth.hooks";
import { Rating } from "./playerRating.types";
import { RootState } from "../../store.ts";

const calculateAverageRatings = (ratings: Array<Rating>) => {
  const totalRatings = ratings.length;
  const summedRatings = ratings.reduce(
    (acc, rating) => {
      acc.attack += rating.attack;
      acc.defence += rating.defence;
      acc.passing += rating.passing;
      acc.intelligence += rating.intelligence;
      return acc;
    },
    { attack: 0, defence: 0, passing: 0, intelligence: 0 },
  );

  return {
    attack: summedRatings.attack / totalRatings,
    defence: summedRatings.defence / totalRatings,
    passing: summedRatings.passing / totalRatings,
    intelligence: summedRatings.intelligence / totalRatings,
  };
};

export const usePlayerRating = (playerId: number) => {
  const dispatch = useDispatch();
  const userId = getLoggedInUser() || 0; // Hent innlogget bruker-ID
  const playerRatings = useSelector(
    (state: RootState) =>
      state.playerRatingReducer.ratingsByPlayer[playerId] || {},
  );

  //state som holder styr på om vi er i edit modus, settes til true når bruker trykker edit
  const [isEditing, setIsEditing] = useState(false);

  const [temporaryRating, setTemporaryRating] = useState<Rating>({
    attack: 0,
    defence: 0,
    passing: 0,
    intelligence: 0,
  });

  const { data: overallRatingData } = useOverallRating(playerId);
  const { data: userRatingData } = useUserRating(playerId, userId || 0);
  const { mutate: saveUserRating } = useSaveUserRating();

  //overvåker endring i overallRatingData og userRatingdat
  useEffect(() => {
    if (overallRatingData) {
      dispatch(setOverallRating({ playerId, overall: overallRatingData }));
    }
    if (userRatingData) {
      dispatch(setUserRating({ playerId, userRating: userRatingData }));
    }
  }, [dispatch, playerId, overallRatingData, userRatingData]);

  const handleEdit = () => {
    //Setter isEditing til true og initialiserer temporaryRating basert på gjeldende bruker-rating.
    setIsEditing(true);
    setTemporaryRating(
      playerRatings.userRating || {
        attack: 0,
        defence: 0,
        passing: 0,
        intelligence: 0,
      },
    );
  };
  //Lagrer endringene ved å bruke saveUserRating, oppdaterer overall rating, og setter isEditing tilbake til false.

  const handleSaveChanges = () => {
    if (temporaryRating && userId) {
      console.log(
        "Saving rating for user:",
        userId,
        "with rating:",
        temporaryRating,
      );

      saveUserRating(
        {
          playerId,
          userId,
          userRating: temporaryRating,
        },
        {
          onSuccess: () => {
            console.log("Rating saved successfully for user:", userId);

            dispatch(setUserRating({ playerId, userRating: temporaryRating }));
            // Oppdaterer overall rating med de nye verdiene
            const updatedRatings = [
              playerRatings.overall || {
                attack: 0,
                defence: 0,
                passing: 0,
                intelligence: 0,
              },
              temporaryRating,
            ];
            const newOverall = calculateAverageRatings(updatedRatings);
            dispatch(setOverallRating({ playerId, overall: newOverall }));
          },
          onError: (error) => {
            console.error("Failed to save rating:", error);
          },
        },
      );
    }
    setIsEditing(false);
  };

  const handleRatingChange = (category: keyof Rating, value: number) => {
    if (temporaryRating) {
      setTemporaryRating({ ...temporaryRating, [category]: value });
    }
  };

  return {
    playerRatings,
    isEditing,
    handleEdit,
    handleSaveChanges,
    temporaryRating,
    handleRatingChange,
  };
};
