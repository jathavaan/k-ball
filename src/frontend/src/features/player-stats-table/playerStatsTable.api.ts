import { apiClient } from "@/shared/api.client";
import { gql } from "@apollo/client";
import { PlayerStatsProps } from "@features/player-stats-table/playerStatsTable.types";

export const getPlayerStatsTable = async ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<PlayerStatsProps[]> => {
  const [, playerId] = queryKey;

  const GET_PLAYER_STATS = gql`
    query GetPlayerStats($playerId: Int!) {
      playerStats(playerId: $playerId) {
        season
        goals
        assists
        appearances
        yellowCards
        redCards
      }
    }
  `;

  try {
    const response = await apiClient.query({
      query: GET_PLAYER_STATS,
      variables: { playerId },
    });

    if (!response.data.playerStats) {
      throw new Error(
        `Player stats table for player with ID ${playerId} not found`,
      );
    }

    return response.data.playerStats;
  } catch (error) {
    console.error("Error fetching player stats table:", error);
    throw error;
  }
};
