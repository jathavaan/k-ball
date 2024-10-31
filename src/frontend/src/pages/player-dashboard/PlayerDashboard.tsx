import { PlayerCardGrid } from "../../features/player-card";
import { PlayerFilters } from "../../features/player-filters/PlayerFilters.tsx";
import Grid from "@mui/material/Grid2";
import { PlayerSorting } from "../../features/player-sorting";
import { SearchBar } from "../../features/searchbar/Searchbar.tsx";

export const PlayerDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <SearchBar />
        <PlayerSorting />
        <PlayerFilters />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <PlayerCardGrid />
      </Grid>
    </Grid>
  );
};
