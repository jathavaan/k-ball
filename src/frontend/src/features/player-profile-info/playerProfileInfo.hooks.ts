import { AppDispatch } from "../../store.ts";
import { useDispatch } from "react-redux";
import { setPlayerProfileInfos } from "./playerProfileInfo.slice.ts";
import { useEffect } from "react";
import { usePlayerProfileInfo } from "./playerProfileInfo.query.ts";

export const usePlayerProfileInfoCard = (playerId: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: playerProfileInfos,
    isLoading,
    isError,
  } = usePlayerProfileInfo(playerId);

  useEffect(() => {
    dispatch(setPlayerProfileInfos(playerProfileInfos ?? []));
  }, [dispatch, playerProfileInfos]);

  return { playerProfileInfos, isLoading, isError };
};
