import Grid from "@mui/material/Grid2";
import { PlayerCardGrid } from "../../features/player-card";
import { PlayerFilters } from "../../features/player-filters/PlayerFilters.tsx";
import { PlayerSorting } from "../../features/player-sorting/PlayerSorting.tsx";
import { SearchBar } from "../../features/searchbar/Searchbar.tsx";

export const PlayerDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <SearchBar />
      </Grid>
      <Grid size={{ xs: 12 }}>
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
