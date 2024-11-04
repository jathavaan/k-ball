﻿import { FormControl } from "@mui/material";
import { ClubFilter } from "./ClubFilter";
import Grid from "@mui/material/Grid2";
import { CountryFilter } from "./CountryFilter.tsx";
import { PositionFilter } from "./PositionFilter.tsx";
import { useApplyFilters, useFilteredCount } from "./playerFilters.hooks.ts";
import { Button } from "../ui";
import { HelperText } from "../ui/helper-text/HelperText.tsx";

export const PlayerFilters = () => {
  const { hasChanges, applyFiltersChanges } = useApplyFilters();
  const { count, isLoading } = useFilteredCount();

  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid size={{ xs: 12, md: 3 }}>
        <FormControl fullWidth>
          <ClubFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <FormControl fullWidth>
          <CountryFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <FormControl fullWidth>
          <PositionFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <HelperText
          description={
            isLoading
              ? "Counting players..."
              : `Current filters give ${count} players`
          }
        />
        <Button
          variant="contained"
          onClick={applyFiltersChanges}
          disabled={!hasChanges}
          sx={{
            borderRadius: "0.4rem",
            width: "100%",
          }}
          text="Apply filters"
        />
      </Grid>
    </Grid>
  );
};
