import { FormControl, Button } from "@mui/material";
import { ClubFilter } from "./ClubFilter";
import Grid from "@mui/material/Grid2";
import { CountryFilter } from "./CountryFilter.tsx";
import { PositionFilter } from "./PositionFilter.tsx";
import { usePlayerFilters } from "./playerFilters.hooks";
import { theme } from "../../theme.ts";

export const PlayerFilters = () => {
  const { hasChanges, applyFilterChanges } = usePlayerFilters();

  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid size={{ xs: 6, md: 3 }}>
        <FormControl fullWidth>
          <ClubFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <FormControl fullWidth>
          <CountryFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <FormControl fullWidth>
          <PositionFilter />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 6, md: 3 }} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          onClick={applyFilterChanges}
          disabled={!hasChanges}
          sx={{
            textTransform: "none", // små bokstaver
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
          }}
        >
          Apply filters
        </Button>
      </Grid>
    </Grid>
  );
};
