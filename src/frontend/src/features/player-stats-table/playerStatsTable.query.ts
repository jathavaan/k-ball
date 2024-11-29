import { useQuery } from "@tanstack/react-query";
import { getPlayerStatsTable } from "@features/player-stats-table/playerStatsTable.api";

export const usePlayerStatsTable = (playerId: number) =>
  useQuery({
    queryKey: ["playerStatsTables", playerId],
    queryFn: getPlayerStatsTable,
  });
