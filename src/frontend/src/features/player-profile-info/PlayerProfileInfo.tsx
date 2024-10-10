import { StyledPlayerInfoCard } from "./playerProfileInfo.style.ts";
import { CardContentText, CardHeader, ImageContainer } from "../ui";
import { PlayerProfileInfoProps } from "./playerProfileInfo.types.ts";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

export const PlayerProfileInfo = (props: PlayerProfileInfoProps) => {
  return (
    <StyledPlayerInfoCard data-testid="player-profile-info">
      <Grid container spacing={2} padding="1rem">
        <Grid
          size={{ xs: 12, md: 4 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <ImageContainer
            src={props.imageUrl}
            alt={`Portrait of ${props.name}`}
          />
          <CardHeader
            headerText={props.name}
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: "0.5rem" }}
          >
            {props.team}
          </Typography>
          <img
            src={props.teamLogo}
            alt={`Logo of ${props.team}`}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }} container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Position" text={props.position} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Age" text={props.age.toString()} />
          </Grid>
          <Grid size={{ xs: 6 }} display="flex">
            <CardContentText title="Nationality" text={props.nationality} />
            <img
              src={props.flag}
              alt={`Flag of ${props.nationality}`}
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "0.5rem",
              }}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Height" text={`${props.height} cm`} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Place" text={props.place} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Birth Date" text={props.birthDate} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Weight" text={`${props.weight} kg`} />
          </Grid>
        </Grid>
      </Grid>
    </StyledPlayerInfoCard>
  );
};
