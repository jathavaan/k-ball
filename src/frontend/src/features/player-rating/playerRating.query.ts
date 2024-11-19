import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getOverallRating,
  getUserRating,
  saveUserRating,
} from "./playerRating.api.ts";
import { Rating, SaveRatingResponse } from "./playerRating.types.ts";

export const useOverallRating = (playerId: number) =>
  useMutation<Rating>({
    mutationKey: ["overallRating", playerId],
    mutationFn: () => getOverallRating(playerId),
  });

export const useUserRating = (playerId: number, userId: number) =>
  useQuery<Rating>({
    queryKey: ["userRating", playerId, userId],
    queryFn: () => getUserRating(playerId, userId),
    gcTime: 0,
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

export const useSaveUserRating = (
  playerId: number,
  userId: number,
  userRating: Rating,
) =>
  useMutation<SaveRatingResponse>({
    mutationFn: () => saveUserRating(playerId, userId, userRating),
    mutationKey: ["saveUserRating", playerId, userId, userRating],
    gcTime: 0,
  });
