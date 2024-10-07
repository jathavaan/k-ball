import { usePlayerCardGrid } from "./playerCard.hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import Grid from "@mui/material/Grid2";
import { ErrorAlert, LinearProgressBar } from "../ui";
import { PlayerCard } from "./PlayerCard.tsx";

export const PlayerCardGrid = () => {
  const { isLoading, isError } = usePlayerCardGrid();
  const playerCards = useSelector(
    (state: RootState) => state.playerCardReducer.playerCards,
  );
  return (
    <Grid container spacing={4}>
      {isLoading ? (
        <Grid size={{ xs: 12 }}>
          <LinearProgressBar />
        </Grid>
      ) : isError ? (
        <Grid size={{ xs: 12 }}>
          <ErrorAlert
            message={
              "Oops! Something went wrong while fetching the player data"
            }
          />
        </Grid>
      ) : (
        playerCards.map((playerCard) => (
          <Grid key={playerCard.playerId} size={{ xs: 12, md: 6, lg: 4 }}>
            <PlayerCard
              key={playerCard.playerId}
              playerId={playerCard.playerId}
              position={playerCard.position}
              nationality={playerCard.nationality}
              age={playerCard.age}
              name={playerCard.name}
              team={playerCard.team}
              imageUrl={playerCard.imageUrl}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};
