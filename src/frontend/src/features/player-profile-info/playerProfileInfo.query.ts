import { useQuery } from "@tanstack/react-query";
import { getPlayerProfileInfos } from "./playerProfileInfo.api.ts";

export const usePlayerProfileInfo = (playerId: number) =>
  useQuery({
    queryKey: ["playerProfileInfos", playerId],
    queryFn: getPlayerProfileInfos,
  });
