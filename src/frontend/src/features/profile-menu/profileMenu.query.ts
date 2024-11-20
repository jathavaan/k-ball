import { useMutation } from "@tanstack/react-query";
import { getDetailedPlayerRatings } from "./profileMenu.api.ts";

export const useDetailedPlayerRatings = (userId: number) => {
  return useMutation({
    mutationKey: ["detailedPlayerRating", userId],
    mutationFn: () => getDetailedPlayerRatings(userId),
  });
};
