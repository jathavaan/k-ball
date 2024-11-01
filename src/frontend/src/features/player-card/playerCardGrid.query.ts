import { useQuery } from "@tanstack/react-query";
import { getPlayerCards } from "./playerCardGrid.api";

export const usePlayerCards = (
  page: number,
  limit: number,
  search: string,
  clubIds: number[],
  countryIds: number[],
  positionIds: number[],
  sortBy: string,
  sortOrder: string,
) =>
  useQuery({
    queryKey: [
      "playerCards",
      page,
      limit,
      search,
      clubIds,
      countryIds,
      positionIds,
      sortBy,
      sortOrder,
    ],
    queryFn: getPlayerCards,
  });
