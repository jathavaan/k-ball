import { useQuery } from "@tanstack/react-query";
import { getClubs, getCountries, getPositions } from "./playerFilters.api.ts";

export const useCountries = () =>
  useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

export const useClubs = () =>
  useQuery({ queryKey: ["clubs"], queryFn: getClubs });

export const usePositions = () =>
  useQuery({ queryKey: ["positions"], queryFn: getPositions });
