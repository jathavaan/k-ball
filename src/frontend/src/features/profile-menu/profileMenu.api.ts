import { DetailedPlayerRatingResponse } from "./profileMenu.types.ts";
import { gql } from "@apollo/client";
import { apiClient } from "../../shared/api.client.ts";

export const getDetailedPlayerRatings = async (
  userId: number,
): Promise<DetailedPlayerRatingResponse[]> => {
  const GET_DETAILED_PLAYER_RATINGS = gql`
    query DetailedPlayerRating($userId: Int!) {
      detailedPlayerRating(userId: $userId) {
        playerId
        fullName
        imageUrl
        averageRating
      }
    }
  `;

  const response = await apiClient.query({
    query: GET_DETAILED_PLAYER_RATINGS,
    variables: { userId },
    fetchPolicy: "no-cache",
  });

  return response.data.detailedPlayerRating;
};
