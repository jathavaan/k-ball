import { useQuery } from "@tanstack/react-query";
import { getPlayerProfileInfos } from "./playerProfileInfo.api.ts";

export const usePlayerProfileInfos = () =>
  useQuery({ queryKey: ["playerProfileInfos"], queryFn: getPlayerProfileInfos });