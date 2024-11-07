import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledBreadcrumb,
  StyledBreadcrumbs,
} from "../../features/player-profile-info/playerProfileInfo.style.ts";
import Grid from "@mui/material/Grid2";

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
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      {isLoading || isStatsLoading ? (
        <Grid size={{ xs: 12 }}>
          <LinearProgressBar />
        </Grid>
      ) : isError || isStatsError ? (
        <Grid size={{ xs: 12 }}>
          <ErrorAlert
            message={
              "Oops! Something went wrong while fetching the player data or stats"
            }
          />
        </Grid>
      ) : (
        <>
          <Grid size={{ xs: 12 }}>
            <StyledBreadcrumbs separator={<NavigateNextIcon />}>
              <StyledBreadcrumb
                label="Players"
                onClick={() => navigate("/project2/players")}
              />
              <StyledBreadcrumb label={playerProfileInfo?.fullName ?? ""} />
            </StyledBreadcrumbs>
          </Grid>
          <Grid size={{ xs: 12 }}>
            {playerProfileInfo && <PlayerProfileInfo {...playerProfileInfo} />}
          </Grid>
          <Grid size={{ xs: 12 }}>
            <PlayerStatsTable playerStatsTable={playerStats} />
          </Grid>
        </>
      )}
    </Grid>
  );
};
