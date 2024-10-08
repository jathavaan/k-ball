import { AppDispatch } from "../../store.ts";
import { useDispatch } from "react-redux";
import { setPlayerProfileInfo } from "./playerProfileInfo.slice.ts";
import { useEffect } from "react";
import { usePlayerProfileInfo } from "./playerProfileInfo.query.ts";

export const usePlayerProfileInfoCard = (playerId: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: playerProfileInfo,
    isLoading,
    isError,
  } = usePlayerProfileInfo(playerId);

  useEffect(() => {
    if (playerProfileInfo) {
      dispatch(setPlayerProfileInfo(playerProfileInfo));
    }
  }, [dispatch, playerProfileInfo]);

  return { playerProfileInfo, isLoading, isError };
};
