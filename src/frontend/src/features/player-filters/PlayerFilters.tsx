import { FormControl, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ClubFilter } from "@features/player-filters/ClubFilter";
import Grid from "@mui/material/Grid2";
import { CountryFilter } from "@features/player-filters/CountryFilter.tsx";
import { PositionFilter } from "@features/player-filters/PositionFilter.tsx";
import {
  useApplyFilters,
  useFilteredCount,
} from "@features/player-filters/playerFilters.hooks.ts";
import { Button, HelperText } from "@features/ui";

export const PlayerFilters = () => {
  const { hasChanges, applyFiltersChanges } = useApplyFilters();
  const { canClearFilters, clearFilters } = useClearFilters();
  const { count, isLoading } = useFilteredCount();
  const isFilterButtonDisabled = !hasChanges || count === 0 || isLoading;

  return (
    <Grid container spacing={4} alignItems="flex-end">
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <FormControl fullWidth>
          <ClubFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <FormControl fullWidth>
          <CountryFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <FormControl fullWidth>
          <PositionFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: "auto" }}>
        <Tooltip title="Reset filters" arrow>
          <IconButton
            onClick={clearFilters}
            disabled={!canClearFilters}
            sx={{
              color: canClearFilters ? "secondary.main" : "grey.500",
              "&:hover": {
                color: canClearFilters ? "secondary.light" : "grey.500",
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid
        size={{ xs: 12, sm: 6, md: 2 }}
        container
        direction="column"
        alignItems="flex-start"
      >
        <HelperText
          description={
            isLoading
              ? "Counting players..."
              : `${count} players match the current filters`
          }
        />
        <Button
          variant="contained"
          onClick={applyFiltersChanges}
          disabled={isFilterButtonDisabled}
          sx={{
            borderRadius: "0.4rem",
            width: "100%",
          }}
          text={"Apply filters"}
        />
      </Grid>
    </Grid>
  );
};
