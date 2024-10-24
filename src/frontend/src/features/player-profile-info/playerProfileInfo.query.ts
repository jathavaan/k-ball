import { useQuery } from "@tanstack/react-query";
import { getPlayerProfileInfo } from "./playerProfileInfo.api.ts";

export const usePlayerProfileInfo = (playerId: number) =>
  useQuery({
    queryKey: ["playerProfileInfos", playerId],
    queryFn: getPlayerProfileInfo,
  });
