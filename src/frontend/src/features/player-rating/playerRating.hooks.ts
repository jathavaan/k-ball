import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setOverallRating,
  setUserRating,
  CategoryRatings,
} from "./playerRating.slice";
import {
  useOverallRating,
  useUserRating,
  useSaveUserRating,
} from "./playerRating.query";

import { getLoggedInUser } from "../auth/auth.hooks";
import { Rating } from "./playerRating.types";

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
  const userId = getLoggedInUser(); // Hent innlogget bruker-ID
  const playerRatings = useSelector(
    (state: any) => state.playerRating.ratingsByPlayer[playerId] || {},
  );

  //state som holder styr på om vi er i edit modus, settes til true når bruker trykker edit

  const [isEditing, setIsEditing] = useState(false); // Ny state for redigeringsmodus

  const [temporaryRating, setTemporaryRating] =
    useState<CategoryRatings | null>(null); // Midlertidig rating under redigering

  const { data: overallRatingData } = useOverallRating(playerId);
  const { data: userRatingData } = useUserRating(playerId, userId || 0); // Bruker userId med fallback til 0 hvis userId ikke er tilgjengelig
  const { mutate: saveUserRating } = useSaveUserRating();

  useEffect(() => {
    if (!userId) return; // Avslutt hvis ingen bruker er innlogget

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
        passing: 0,
        intelligence: 0,
      },
    );
  };

  const handleSaveChanges = async () => {
    //Lagrer endringene ved å bruke saveUserRating, oppdaterer overall rating, og setter isEditing tilbake til false.
    if (temporaryRating && userId) {
      await saveUserRating(playerId, userId, temporaryRating);
      dispatch(setUserRating({ playerId, userRating: temporaryRating }));

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
