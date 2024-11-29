import { CardContentText, CardHeader, ImageContainer } from "@features/ui";
import Grid from "@mui/material/Grid2";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { StyledPlayerCard } from "@features/player-card/playerCard.style.ts";
import { PlayerCardProps } from "@features/player-card/playerCard.types.ts";

export const PlayerCard = (props: PlayerCardProps) => {
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
              alt={`Portrait of ${props.fullName}`}
            />
          </Grid>
          <Grid container size={{ xs: 7 }} rowSpacing={0}>
            <Grid size={{ xs: 12 }}>
              <CardHeader
                headerText={props.fullName}
                sx={{ fontSize: "1.2rem" }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CardContentText
                title="Team"
                text={props.currentClub}
                sx={{ fontSize: "0.85rem" }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CardContentText
                title="Pos."
                text={props.position}
                sx={{ fontSize: "0.85rem" }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CardContentText
                title="Nat."
                text={props.nationality}
                sx={{ fontSize: "0.85rem" }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CardContentText
                title="Age"
                text={props.age.toString()}
                sx={{ fontSize: "0.85rem" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </StyledPlayerCard>
  );
};
