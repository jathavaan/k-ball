import { AppDispatch } from "../../store.ts";
import { useDispatch } from "react-redux";
import { setPlayerCards } from "./playerCard.slice.ts";
import { useEffect } from "react";
import { usePlayerCards } from "./playerCard.query.ts";

export const usePlayerCardGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: playerCards, isLoading, isError } = usePlayerCards();

  useEffect(() => {
    dispatch(setPlayerCards(playerCards ?? []));
  }, [dispatch, playerCards]);

  return { isLoading, isError };
};
