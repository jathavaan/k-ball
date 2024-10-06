import { useQuery } from "@tanstack/react-query";
import { getPlayerCards } from "./playerCard.api.ts";

export const usePlayerCards = () =>
  useQuery({ queryKey: ["playerCards"], queryFn: getPlayerCards });
