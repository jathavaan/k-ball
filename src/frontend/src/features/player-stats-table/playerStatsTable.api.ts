import { PlayerStatsTableProps } from "./playerStatsTable.types";

export const getPlayerStatsTable = ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<PlayerStatsTableProps> => {
  const [, playerId] = queryKey;

  return new Promise((resolve) => {
    setTimeout(() => {
      const playerStatsData: { [key: number]: PlayerStatsTableProps['playerStatsTable'] } = {
        2890: [
          {
        playerId: 2890,
        season: 2021,
        goals: 0,
        assists: 0,
        appearances: 10,
        yellowCards: 1,
        redCards: 0,
          },
          {
        playerId: 2890,
        season: 2020,
        goals: 0,
        assists: 1,
        appearances: 12,
        yellowCards: 2,
        redCards: 1,
          },
        ],
        2898: [
          {
        playerId: 2898,
        season: 2021,
        goals: 5,
        assists: 3,
        appearances: 15,
        yellowCards: 2,
        redCards: 0,
          },
          {
        playerId: 2898,
        season: 2020,
        goals: 2,
        assists: 1,
        appearances: 18,
        yellowCards: 3,
        redCards: 1,
          },
        ],
        2905: [
          {
        playerId: 2905,
        season: 2021,
        goals: 1,
        assists: 2,
        appearances: 12,
        yellowCards: 1,
        redCards: 0,
          },
          {
        playerId: 2905,
        season: 2020,
        goals: 3,
        assists: 4,
        appearances: 14,
        yellowCards: 0,
        redCards: 0,
          },
        ],
        33202: [
          {
        playerId: 33202,
        season: 2021,
        goals: 0,
        assists: 1,
        appearances: 5,
        yellowCards: 0,
        redCards: 0,
          },
          {
        playerId: 33202,
        season: 2020,
        goals: 1,
        assists: 0,
        appearances: 8,
        yellowCards: 0,
        redCards: 0,
          },
        ],
        33937: [
          {
        playerId: 33937,
        season: 2021,
        goals: 2,
        assists: 2,
        appearances: 11,
        yellowCards: 1,
        redCards: 0,
          },
          {
        playerId: 33937,
        season: 2020,
        goals: 3,
        assists: 3,
        appearances: 9,
        yellowCards: 2,
        redCards: 1,
          },
        ],
        34132: [
          {
        playerId: 34132,
        season: 2021,
        goals: 8,
        assists: 4,
        appearances: 18,
        yellowCards: 1,
        redCards: 0,
          },
          {
        playerId: 34132,
        season: 2020,
        goals: 7,
        assists: 6,
        appearances: 16,
        yellowCards: 2,
        redCards: 0,
          },
        ],
        34310: [
          {
        playerId: 34310,
        season: 2021,
        goals: 1,
        assists: 1,
        appearances: 10,
        yellowCards: 2,
        redCards: 0,
          },
          {
        playerId: 34310,
        season: 2020,
        goals: 0,
        assists: 1,
        appearances: 12,
        yellowCards: 3,
        redCards: 1,
          },
        ],
        34420: [
          {
        playerId: 34420,
        season: 2021,
        goals: 2,
        assists: 1,
        appearances: 14,
        yellowCards: 1,
        redCards: 0,
          },
          {
        playerId: 34420,
        season: 2020,
        goals: 1,
        assists: 2,
        appearances: 13,
        yellowCards: 0,
        redCards: 0,
          },
        ],
      };

      const playerStats = playerStatsData[playerId];
      resolve({ playerStatsTable: playerStats ?? [] });
    }, 1000);
  });
};
