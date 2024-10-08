import { AppDispatch } from "../../store.ts";
import { useDispatch } from "react-redux";
import { setPlayerProfileInfos } from "./playerProfileInfo.slice.ts";
import { useEffect } from "react";
import { usePlayerProfileInfos } from "./playerProfileInfo.query.ts";

export const usePlayerProfileInfoCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: playerProfileInfos,
    isLoading,
    isError,
  } = usePlayerProfileInfos();

  useEffect(() => {
    dispatch(setPlayerProfileInfos(playerProfileInfos ?? []));
  }, [dispatch, playerProfileInfos]);

  return { isLoading, isError };
};
