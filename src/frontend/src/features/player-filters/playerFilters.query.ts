import { useQuery } from "@tanstack/react-query";
import {
  getClubs,
  getCountries,
  getPositions,
  getCount,
} from "./playerFilters.api.ts";

export const useCountries = () =>
  useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

export const useClubs = () =>
  useQuery({ queryKey: ["clubs"], queryFn: getClubs });

export const usePositions = () =>
  useQuery({ queryKey: ["positions"], queryFn: getPositions });

export const useCount = (
  page: number,
  limit: number,
  search: string,
  clubIds: number[],
  countryIds: number[],
  positionIds: number[],
  sortBy: string,
  sortOrder: string,
) => {
  return useQuery({
    queryKey: [
      "count",
      page,
      limit,
      search,
      clubIds,
      countryIds,
      positionIds,
      sortBy,
      sortOrder,
    ],
    queryFn: getCount,
  });
};
