import { apiClient } from "../../shared/api.client.ts";
import { gql } from "@apollo/client";
import { Rating, SaveRatingResponse } from "./playerRating.types.ts";

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

export const getOverallRating = async (playerId: number): Promise<Rating> => {
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
  const response = await apiClient.query({
    query: GET_USER_RATING,
    variables: { playerId, userId },
  });

  return response.data.playerRating;
};

export const saveUserRating = async (
  playerId: number,
  userId: number,
  userRating: Rating,
): Promise<SaveRatingResponse> => {
  const response = await apiClient.mutate({
    mutation: UPSERT_USER_RATING,
    variables: {
      playerId,
      userId,
      ...userRating,
    },
  });

  return response.data.playerRating;
};
