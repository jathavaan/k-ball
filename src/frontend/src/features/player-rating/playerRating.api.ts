import { apiClient } from "../../shared/api.client.ts";
import { gql } from "@apollo/client";
import {
  DeleteRatingResponse,
  Rating,
  SaveRatingResponse,
} from "./playerRating.types.ts";

export const getOverallRating = async (playerId: number): Promise<Rating> => {
  const GET_OVERALL_RATING = gql`
    query GetOverallRating($playerId: Int!) {
      playerRating(playerId: $playerId) {
        attack
        defence
        passing
        intelligence
        average
      }
    }
  `;

  const response = await apiClient.query({
    query: GET_OVERALL_RATING,
    variables: { playerId },
    fetchPolicy: "no-cache",
  });

  return response.data.playerRating;
};

export const getUserRating = async (
  playerId: number,
  userId: number,
): Promise<Rating> => {
  const GET_USER_RATING = gql`
    query GetUserRating($playerId: Int!, $userId: Int!) {
      playerRating(playerId: $playerId, userId: $userId) {
        attack
        defence
        passing
        intelligence
        average
      }
    }
  `;

  const response = await apiClient.query({
    query: GET_USER_RATING,
    variables: { playerId, userId },
    fetchPolicy: "no-cache",
  });

  return response.data.playerRating;
};

export const saveUserRating = async (
  playerId: number,
  userId: number,
  userRating: Rating,
): Promise<SaveRatingResponse> => {
  const UPSERT_USER_RATING = gql`
    mutation UpsertUserRating(
      $playerId: Int!
      $userId: Int!
      $attack: Int!
      $defence: Int!
      $passing: Int!
      $intelligence: Int!
    ) {
      playerRating(
        playerId: $playerId
        userId: $userId
        attack: $attack
        defence: $defence
        passing: $passing
        intelligence: $intelligence
      ) {
        isUpsertSuccessful
      }
    }
  `;

  const response = await apiClient.mutate({
    mutation: UPSERT_USER_RATING,
    variables: {
      playerId,
      userId,
      ...userRating,
    },
  });

  console.log(response.data.playerRating);
  return response.data.playerRating;
};

export const deletePlayerRating = async (
  userId: number,
  playerId: number,
): Promise<DeleteRatingResponse> => {
  const DELETE_PLAYER_RATING = gql`
    mutation DeletePlayerRating($playerId: Int!, $userId: Int!) {
      deletePlayerRating(playerId: $playerId, userId: $userId) {
        isDeleteSuccessful
      }
    }
  `;

  const response = await apiClient.mutate({
    mutation: DELETE_PLAYER_RATING,
    variables: {
      playerId,
      userId,
    },
    fetchPolicy: "no-cache",
  });

  return response.data.deletePlayerRating;
};
