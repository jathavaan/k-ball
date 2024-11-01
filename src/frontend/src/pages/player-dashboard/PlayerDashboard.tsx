import Grid from "@mui/material/Grid2";
import { PlayerCardGrid } from "../../features/player-card";
import { PlayerFilters } from "../../features/player-filters";
import { PlayerSorting } from "../../features/player-sorting";
import { SearchBar } from "../../features/searchbar";

export const PlayerDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 7, md: 8 }}>
        <SearchBar />
      </Grid>
      <Grid size={{ xs: 5, md: 8 }}>
        <PlayerSorting />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <PlayerFilters />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <PlayerCardGrid />
      </Grid>
    </Grid>
  );
};
