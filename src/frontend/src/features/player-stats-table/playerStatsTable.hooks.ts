import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { setPlayerStatsTable } from "./playerStatsTable.slice";
import { useEffect } from "react";
import { usePlayerStatsTable } from "./playerStatsTable.query";

export const usePlayerStatsTableData = (playerId: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: playerStatsTable,
    isLoading,
    isError,
  } = usePlayerStatsTable(playerId);

  useEffect(() => {
    if (playerStatsTable) {
      dispatch(setPlayerStatsTable(playerStatsTable));
    }
  }, [dispatch, playerStatsTable]);

  return { isLoading, isError };
};
