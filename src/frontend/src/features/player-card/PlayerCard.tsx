import { StyledPlayerCard } from "./playerCard.style.ts";
import { CardContentText, CardHeader, ImageContainer } from "../ui";
import Grid from "@mui/material/Grid2";
import { PlayerCardProps } from "./playerCard.types.ts";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const PlayerCard = (props: PlayerCardProps) => {
  console.log("PlayerCard", props);
  return (
    <StyledPlayerCard data-testid="player-card">
      <CardActionArea component={RouterLink} to={`${props.playerId}`}>
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
      </CardActionArea>
    </StyledPlayerCard>
  );
};
