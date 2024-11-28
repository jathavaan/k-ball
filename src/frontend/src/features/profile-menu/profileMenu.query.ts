import { useMutation } from "@tanstack/react-query";
import { getDetailedPlayerRatings } from "@features/profile-menu/profileMenu.api.ts";

export const useDetailedPlayerRatings = (userId: number) => {
  return useMutation({
    mutationKey: ["detailedPlayerRating", userId],
    mutationFn: () => getDetailedPlayerRatings(userId),
  });
};
