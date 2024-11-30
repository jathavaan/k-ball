import { FormControl, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledIconButton } from "@features/player-filters/playerFilters.style.ts";
import { ClubFilter } from "@features/player-filters/ClubFilter";
import Grid from "@mui/material/Grid2";
import { CountryFilter } from "@features/player-filters/CountryFilter.tsx";
import { PositionFilter } from "@features/player-filters/PositionFilter.tsx";
import {
  useApplyFilters,
  useFilteredCount,
  useClearFilters,
} from "@features/player-filters/playerFilters.hooks.ts";
import { Button, HelperText } from "@features/ui";

export const PlayerFilters = () => {
  const { hasChanges, applyFiltersChanges } = useApplyFilters();
  const { canClearFilters, clearFilters } = useClearFilters();
  const { count, isLoading } = useFilteredCount();
  const isFilterButtonDisabled = !hasChanges || count === 0 || isLoading;

  return (
    <Grid container spacing={4} alignItems="flex-end">
      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
        <FormControl fullWidth>
          <ClubFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
        <FormControl fullWidth>
          <CountryFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
        <FormControl fullWidth>
          <PositionFilter />
        </FormControl>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6, md: 4 }}
        container
        spacing={2}
        sx={{
          ml: "auto",
        }}
      >
        <Grid
          size={{ xs: 2 }}
          display="flex"
          alignItems="flex-end"
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
        >
          <Tooltip title="Reset filters" arrow disableInteractive>
            <span
              role="presentation"
              aria-disabled={!canClearFilters}
              tabIndex={!canClearFilters ? 0 : undefined}
            >
              <StyledIconButton
                onClick={clearFilters}
                disabled={!canClearFilters}
              >
                <DeleteIcon />
              </StyledIconButton>
            </span>
          </Tooltip>
        </Grid>

        <Grid
          size={{ xs: 10 }}
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
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
              width: "100%",
            }}
            text={"Apply filters"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
