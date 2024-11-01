import { PlayerProfileInfoProps } from "./playerProfileInfo.types.ts";
import { apiClient } from "../../shared/api.client.ts";
import { gql } from "@apollo/client";

const GET_PLAYER_PROFILE_INFO = gql`
  query GetPlayerProfileInfo($playerId: Int!) {
    player(id: $playerId) {
      id
      fullName
      currentClub
      imageUrl
      position
      nationality
      age
      clubLogo
      flagUrl
      birthDate
      height
      weight
      birthPlace
    }
  }
`;

export const getPlayerProfileInfo = async ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<PlayerProfileInfoProps | undefined> => {
  const [, playerId] = queryKey;

  try {
    const response = await apiClient.query({
      query: GET_PLAYER_PROFILE_INFO,
      variables: { playerId },
    });

    if (!response.data.player) {
      throw new Error(`Player with ID ${playerId} not found`);
    }

    return response.data.player;
  } catch (error) {
    console.error("Error fetching player profile info:", error);
    throw error;
  }
};
