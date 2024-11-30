import { apiClient } from "@/shared/api.client";
import { gql } from "@apollo/client";
import { PlayerStatsTableProps } from "@features/player-stats-table/playerStatsTable.types";

export const getPlayerStatsTable = async ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<PlayerStatsTableProps> => {
  const [, playerId] = queryKey;

  const GET_PLAYER_STATS = gql`
    query GetPlayerStats($playerId: Int!) {
      playerStats(playerId: $playerId) {
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
    console.log("GraphQL response:", response.data);

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

  // // Helper function to generate random stat values within defined ranges
  // const generateRandomStats = (season: number) => ({
  //   playerId: playerId,
  //   season,
  //   goals: Math.floor(Math.random() * 15), // 0-14 goals
  //   assists: Math.floor(Math.random() * 10), // 0-9 assists
  //   appearances: Math.floor(Math.random() * 30) + 1, // 1-30 appearances
  //   yellowCards: Math.floor(Math.random() * 5), // 0-4 yellow cards
  //   redCards: Math.floor(Math.random() * 2), // 0-1 red cards
  // });

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     const seasons = [2023, 2022, 2020, 2019, 2018];
  //     const playerStats = seasons.map(generateRandomStats);

  //     resolve({ playerStatsTable: playerStats });
  //   }, 1);
  // });
};
