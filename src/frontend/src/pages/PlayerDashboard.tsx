import { PlayerCard } from "../features/player-card";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";

export const PlayerDashboard = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <PlayerCard />
        </Grid>
      </Grid>
    </Container>
  );
};
