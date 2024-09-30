import { StyledPlayerCard } from "./playerCard.style.ts";
import { CardContentText, CardHeader } from "../ui";
import { ImageContainer } from "../ui/image-container/ImageContainer.tsx";
import Grid from "@mui/material/Grid2";

export const PlayerCard = () => {
  return (
    <StyledPlayerCard>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          size={{ xs: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageContainer
            src="https://media.api-sports.io/football/players/34138.png"
            alt="Alt text"
          />
        </Grid>
        <Grid container size={{ xs: 8 }} rowSpacing={0}>
          <Grid size={{ xs: 12 }}>
            <CardHeader headerText="Jesse Lingard" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Team" text="FC Seoul" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Position" text="Forward" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Nationality" text="England" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CardContentText title="Age" text="31" />
          </Grid>
        </Grid>
      </Grid>
    </StyledPlayerCard>
  );
};
