import { useQuery } from "@tanstack/react-query";
import { getPlayerProfileInfo } from "@features/player-profile-info/playerProfileInfo.api.ts";

export const usePlayerProfileInfo = (playerId: number) =>
  useQuery({
    queryKey: ["playerProfileInfos", playerId],
    queryFn: getPlayerProfileInfo,
  });
