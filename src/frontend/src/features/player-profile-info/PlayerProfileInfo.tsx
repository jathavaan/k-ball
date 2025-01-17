import { StyledPlayerInfoCard } from "@features/player-profile-info/playerProfileInfo.style.ts";
import { CardHeader, CardInfoText, ImageContainer } from "@features/ui";
import { PlayerProfileInfoProps } from "@features/player-profile-info/playerProfileInfo.types.ts";
import Grid from "@mui/material/Grid2";

export const PlayerProfileInfo = (props: PlayerProfileInfoProps) => {
  return (
    <StyledPlayerInfoCard data-testid="player-profile-info">
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12 }}
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
        <Grid size={{ xs: 12 }}>
          <CardHeader
            headerText={props.fullName}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText
            titleText={"Current club"}
            contentText={props.currentClub}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText titleText={"Position"} contentText={props.position} />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText
            titleText={"Nationality"}
            contentText={props.nationality}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText titleText={"Birth place"} contentText={props.place} />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText
            titleText={"Date of birth"}
            contentText={props.birthDate}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText
            titleText={"Age"}
            contentText={`${props.age.toString()} years`}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText
            titleText={"Height"}
            contentText={props.height ? `${props.height} cm` : "N/A"}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <CardInfoText
            titleText={"Weight"}
            contentText={props.weight ? `${props.weight} kg` : "N/A"}
          />
        </Grid>
      </Grid>
    </StyledPlayerInfoCard>
  );
};
