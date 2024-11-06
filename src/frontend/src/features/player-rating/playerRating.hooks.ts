import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setOverallRating,
  setUserRating,
  CategoryRatings,
} from "./playerRating.slice";
import {
  fetchOverallRating,
  fetchUserRating,
  saveUserRating,
} from "./playerRating.api";

const calculateAverageRatings = (ratings: Array<CategoryRatings>) => {
  const totalRatings = ratings.length;
  const summedRatings = ratings.reduce(
    (acc, rating) => {
      acc.attack += rating.attack;
      acc.defence += rating.defence;
      acc.passes += rating.passes;
      acc.intelligence += rating.intelligence;
      return acc;
    },
    { attack: 0, defence: 0, passes: 0, intelligence: 0 },
  );

  return {
    attack: summedRatings.attack / totalRatings,
    defence: summedRatings.defence / totalRatings,
    passes: summedRatings.passes / totalRatings,
    intelligence: summedRatings.intelligence / totalRatings,
  };
};

export const usePlayerRating = (playerId: string, userId: string) => {
  const dispatch = useDispatch();
  const playerRatings = useSelector(
    (state: any) => state.playerRating.ratingsByPlayer[playerId] || {},
  );

  //state som holder styr på om vi er i edit modus, settes til true når bruker trykker edit

  const [isEditing, setIsEditing] = useState(false); // Ny state for redigeringsmodus

  const [temporaryRating, setTemporaryRating] =
    useState<CategoryRatings | null>(null); // Midlertidig rating under redigering

  useEffect(() => {
    const fetchRatings = async () => {
      const allRatings = await fetchOverallRating(playerId);
      const overallAverage = calculateAverageRatings(allRatings);
      dispatch(setOverallRating({ playerId, overall: overallAverage }));

      const userRating = await fetchUserRating(playerId, userId);
      if (userRating) {
        dispatch(setUserRating({ playerId, userRating }));
      }
    };

    fetchRatings();
  }, [dispatch, playerId, userId]);

  const handleEdit = () => {
    //Setter isEditing til true og initialiserer temporaryRating basert på gjeldende bruker-rating.
    setIsEditing(true);
    setTemporaryRating(
      playerRatings.userRating || {
        attack: 0,
        defence: 0,
        passes: 0,
        intelligence: 0,
      },
    );
  };

  const handleSaveChanges = async () => {
    //Lagrer endringene ved å bruke saveUserRating, oppdaterer overall rating, og setter isEditing tilbake til false.
    if (temporaryRating) {
      await saveUserRating(playerId, userId, temporaryRating);
      dispatch(setUserRating({ playerId, userRating: temporaryRating }));

      const updatedRatings = [
        playerRatings.overall || {
          attack: 0,
          defence: 0,
          passes: 0,
          intelligence: 0,
        },
        temporaryRating,
      ];
      const newOverall = calculateAverageRatings(updatedRatings);
      dispatch(setOverallRating({ playerId, overall: newOverall }));
    }
    setIsEditing(false);
  };

  const handleRatingChange = (
    //Oppdaterer temporaryRating for en spesifikk kategori.
    category: keyof CategoryRatings,
    value: number,
  ) => {
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
