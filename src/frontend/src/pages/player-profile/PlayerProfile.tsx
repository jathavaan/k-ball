import {
  PlayerProfileInfo,
  usePlayerProfileInfoCard,
} from "../../features/player-profile-info";
import { ErrorAlert, LinearProgressBar } from "../../features/ui";
import {
  PlayerStatsTable,
  usePlayerStatsTableData,
} from "../../features/player-stats-table";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";

export const PlayerProfile = () => {
  const { playerId } = useParams<{ playerId: string }>();
  const { isLoading, isError } = usePlayerProfileInfoCard(Number(playerId));
  const playerProfileInfo = useSelector(
    (state: RootState) => state.playerProfileInfoReducer.playerProfileInfo,
  );
  const { isLoading: isStatsLoading, isError: isStatsError } =
    usePlayerStatsTableData(Number(playerId)) || { playerStatsTable: [] };
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
          {playerProfileInfo && <PlayerProfileInfo {...playerProfileInfo} />}
          <PlayerStatsTable playerStatsTable={playerStats} />
        </>
      )}
    </>
  );
};
