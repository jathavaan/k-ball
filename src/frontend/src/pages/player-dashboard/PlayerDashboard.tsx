import { PlayerCardGrid } from "../../features/player-card";
import { PlayerFilters } from "../../features/player-filters/PlayerFilters.tsx";
import Grid from "@mui/material/Grid";

import { PlayerSorting } from "../../features/player-sorting";
import { SearchBar } from "../../features/searchbar/Searchbar.tsx";

export const PlayerDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} md={4}>
        <PlayerSorting />
      </Grid>
      <Grid item xs={12}>
        <PlayerFilters />
      </Grid>
      <Grid item xs={12}>
        <PlayerCardGrid />
      </Grid>
    </Grid>
  );
};
