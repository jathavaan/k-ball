import { StyledPlayerCard } from "./playerCard.style.ts";
import {
  CardContentText,
  CardHeader,
  ErrorAlert,
  LinearProgressBar,
} from "../ui";
import { ImageContainer } from "../ui/image-container/ImageContainer.tsx";
import Grid from "@mui/material/Grid2";
import { PlayerCardProps } from "./playerCard.types.ts";
import { usePlayerCardGrid } from "./playerCard.hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";

export const PlayerCard = (props: PlayerCardProps) => {
  return (
    <StyledPlayerCard data-testid="player-card">
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          size={{ xs: 5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageContainer
            src={props.imageUrl}
            alt={`Portrait of ${props.name}`}
          />
        </Grid>
        <Grid container size={{ xs: 7 }} rowSpacing={0}>
          <Grid size={{ xs: 12 }}>
            <CardHeader headerText={props.name} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Team" text={props.team} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Pos." text={props.position} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Nat." text={props.nationality} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Age" text={props.age.toString()} />
          </Grid>
        </Grid>
      </Grid>
    </StyledPlayerCard>
  );
};

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
          <Grid key={playerCard.playerId} size={{ xs: 12, sm: 6, lg: 4 }}>
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
