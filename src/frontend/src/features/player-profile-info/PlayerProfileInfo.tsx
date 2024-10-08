import { StyledPlayerInfoCard } from "./playerProfileInfo.style.ts";
import { CardContentText, CardHeader, ImageContainer } from "../ui";
import { PlayerProfileInfoProps } from "./playerProfileInfo.types.ts";
import Grid from "@mui/material/Grid2";

export const PlayerProfileInfo = (props: PlayerProfileInfoProps) => {
  return (
    <StyledPlayerInfoCard data-testid="player-profile-info">
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid size={{ xs: 12 }}>
          <CardHeader
            headerText={props.name}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Grid>
        <Grid
          size={{ xs: 3 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ImageContainer
            src={props.imageUrl}
            alt={`Portrait of ${props.name}`}
            width={"100%"}
            height="auto"
          />
        </Grid>
        <Grid size={{ xs: 9 }} container spacing={2}>
          <Grid size={{ xs: 6 }} display={"flex"}>
            <CardContentText title="Team" text={props.team} />
            <img
              src={props.teamLogo}
              alt={`Logo of ${props.team}`}
              style={{ width: "20px", height: "20px", marginLeft: "8px" }}
            />
          </Grid>
          <Grid size={{ xs: 6 }} display={"flex"}>
            <CardContentText title="Nat." text={props.nationality} />
            <img
              src={props.flag}
              alt={`Flag of ${props}`}
              style={{ width: "20px", height: "20px", marginLeft: "8px" }}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Place" text={props.place} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Pos." text={props.position} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Age" text={props.age.toString()} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Birth Date" text={props.birthDate} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Height" text={`${props.height} cm`} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardContentText title="Weight" text={`${props.weight} kg`} />
          </Grid>
        </Grid>
      </Grid>
    </StyledPlayerInfoCard>
  );
};
