import {
  PlayerProfileInfo,
  usePlayerProfileInfoCard,
} from "../features/player-profile-info";
import { LinearProgressBar, ErrorAlert } from "../features/ui";
import {
  PlayerStatsTable,
  usePlayerStatsTableData,
} from "../features/player-stats-table";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // Adjust the import path according to your project structure

export const PlayerProfile = () => {
  const playerId = 2898;
  const { isLoading, isError } = usePlayerProfileInfoCard(
    Number(playerId),
  );
  const playerProfileInfo = useSelector((state: RootState) => state.playerProfileInfoReducer.playerProfileInfo);
  const {
    isLoading: isStatsLoading,
    isError: isStatsError,
  } = usePlayerStatsTableData(Number(playerId)) || { playerStatsTable: [] };
  const playerStatsTable = useSelector(
    (state: RootState) => state.playerStatsTableReducer.playerStatsTable,
  );
  const playerStats = playerStatsTable || [];
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
            <PlayerProfileInfo {...playerProfileInfo} />
          )}
          <PlayerStatsTable playerStatsTable={playerStats} />
        </>
      )}
    </>
  );
};
