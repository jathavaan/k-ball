import { useMutation } from "@tanstack/react-query";
import {
  deletePlayerRating,
  getOverallRating,
  getUserRating,
  saveUserRating,
} from "@features/player-rating/playerRating.api.ts";
import {
  Rating,
  SaveRatingResponse,
} from "@features/player-rating/playerRating.types.ts";

export const useOverallRating = (playerId: number) =>
  useMutation<Rating>({
    mutationKey: ["overallRating", playerId],
    mutationFn: () => getOverallRating(playerId),
  });

export const useUserRating = (playerId: number, userId: number) =>
  useMutation<Rating>({
    mutationKey: ["userRating", playerId, userId],
    mutationFn: () => getUserRating(playerId, userId),
    gcTime: 0,
  });

export const useSaveUserRating = (
  playerId: number,
  userId: number,
  userRating: Rating,
) =>
  useMutation<SaveRatingResponse>({
    mutationFn: () => saveUserRating(playerId, userId, userRating),
    mutationKey: ["saveUserRating", playerId, userId, userRating],
  });

export const useDeletePlayerRating = (playerId: number, userId: number) =>
  useMutation({
    mutationFn: () => deletePlayerRating(playerId, userId),
    mutationKey: ["deletePlayerRating", playerId, userId],
  });
