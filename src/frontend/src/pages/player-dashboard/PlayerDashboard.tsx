import { PlayerCardGrid } from "../../features/player-card";
import { PlayerFilters } from "../../features/player-filters/PlayerFilters.tsx";
import Grid from "@mui/material/Grid2";
import { SearchBar } from "../../features/searchbar/Searchbar.tsx";

export const PlayerDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <SearchBar />
        <PlayerFilters />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <PlayerCardGrid />
      </Grid>
    </Grid>
  );
};
