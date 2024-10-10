import { PlayerStatsTableProps } from "./playerStatsTable.types";

export const getPlayerStatsTable = ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<PlayerStatsTableProps> => {
  const [, playerId] = queryKey;

  return new Promise((resolve) => {
    resolve({
      playerStatsTable: [
        {
          playerId,
          season: 2021,
          goals: 3,
          assists: 2,
          appearances: 10,
          yellowCards: 1,
          redCards: 0,
        },
        {
          playerId,
          season: 2020,
          goals: 5,
          assists: 3,
          appearances: 15,
          yellowCards: 2,
          redCards: 1,
        },
      ],
    });
  });
};
