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
            <Grid container
                size={{ xs: 5 }}
                sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <Grid size={{ xs: 12 }}>
                <CardHeader headerText={props.name} />
                </Grid>
              <Grid size={{ xs: 12 }}>
                <ImageContainer
                  src={props.imageUrl}
                  alt={`Portrait of ${props.name}`}
                />
                </Grid>
              </Grid>
            </Grid>
            <Grid container size={{ xs: 7 }} rowSpacing={2}>
                <Grid 
                size={{ xs: 12 }} 
                display={"flex"}>
                <CardContentText title="Team" text={props.team} />
                <img 
                src={props.teamLogo} 
                alt={`Logo of ${props.team}`} 
                style={{ width: "20px", height: "20px", marginLeft: "8px" }}
                />
                </Grid>
                <Grid 
                size={{ xs: 12 }}
                display={"flex"}>
                <CardContentText title="Nat." text={props.nationality} />
                <img 
                src={props.flag} 
                alt={`Flag of ${props}`} 
                style={{ width: "20px", height: "20px", marginLeft: "8px" }}/>
                </Grid>
                <Grid size={{ xs: 12 }}>
                <CardContentText title="Place" text={props.place} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                <CardContentText title="Pos." text={props.position} />
                </Grid>
            </Grid>
            <Grid container size={{ xs: 7 }} rowSpacing={2}>
                <Grid size={{ xs: 12 }}>
                <CardContentText title="Age" text={props.age.toString()} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                <CardContentText title="Birth Date" text={props.birthDate} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                <CardContentText title="Height" text={`${props.height} cm`} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                <CardContentText title="Weight" text={`${props.weight} kg`} />
                </Grid>
            </Grid>
    </StyledPlayerInfoCard>
    );
}
