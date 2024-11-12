import { useQuery, useMutation } from "@tanstack/react-query";
import {
  fetchOverallRating,
  fetchUserRating,
  saveUserRating,
} from "./playerRating.api.ts";
import { Rating, SaveRatingResponse } from "./playerRating.types.ts";

export const useOverallRating = (playerId: number) =>
  useQuery<Rating>({
    queryKey: ["overallRating", playerId],
    queryFn: () => fetchOverallRating(playerId),
  });

export const useUserRating = (playerId: number, userId: number) =>
  useQuery<Rating>({
    queryKey: ["userRating", playerId, userId],
    queryFn: () => fetchUserRating(playerId, userId),
    enabled: !!userId, // Kjør bare spørringen hvis userId er definert - trenger kanskje ikke?
  });

export const useSaveUserRating = () =>
  useMutation<
    SaveRatingResponse,
    unknown,
    { playerId: number; userId: number; userRating: Rating }
  >({
    mutationFn: ({ playerId, userId, userRating }) =>
      saveUserRating(playerId, userId, userRating),
  });
