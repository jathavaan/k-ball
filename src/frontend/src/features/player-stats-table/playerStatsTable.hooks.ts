import { AppDispatch } from "@/store.ts";
import { useDispatch } from "react-redux";
import { setPlayerStatsTable } from "@features/player-stats-table/playerStatsTable.slice";
import { useEffect } from "react";
import { usePlayerStatsTable } from "@features/player-stats-table/playerStatsTable.query";

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
