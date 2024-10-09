import {
  PlayerProfileInfo,
  usePlayerProfileInfoCard,
} from "../features/player-profile-info";
import { LinearProgressBar, ErrorAlert } from "../features/ui";
import {
  PlayerStatsTable,
  usePlayerStatsTableData,
} from "../features/player-stats-table";

export const PlayerProfile = () => {
  const playerId = 2898;
  const { playerProfileInfo, isLoading, isError } = usePlayerProfileInfoCard(
    Number(playerId),
  );
  const {
    playerStatsTable,
    isLoading: isStatsLoading,
    isError: isStatsError,
  } = usePlayerStatsTableData(Number(playerId)) || { playerStatsTable: [] };
  const playerStats = playerStatsTable?.playerStatsTable || [];
  return (
    <>
      {isLoading || isStatsLoading ? (
        <LinearProgressBar />
      ) : isError || isStatsError ? (
        <ErrorAlert
          message={
            "Oops! Something went wrong while fetching the player data or stats"
          }
        />
      ) : (
        <>
          {playerProfileInfo && (
            <PlayerProfileInfo
              playerId={playerProfileInfo.playerId}
              name={playerProfileInfo.name}
              team={playerProfileInfo.team}
              teamLogo={playerProfileInfo.teamLogo}
              imageUrl={playerProfileInfo.imageUrl}
              position={playerProfileInfo.position}
              nationality={playerProfileInfo.nationality}
              flag={playerProfileInfo.flag}
              age={playerProfileInfo.age}
              birthDate={playerProfileInfo.birthDate}
              height={playerProfileInfo.height}
              weight={playerProfileInfo.weight}
              place={playerProfileInfo.place}
            />
          )}
          <PlayerStatsTable playerStatsTable={playerStats} />
        </>
      )}
    </>
  );
};
