import { styled, Typography } from "@mui/material";
import { ToggleButtonGroup } from "@mui/lab";

export const SortContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  maxWidth: "400px",
  margin: "20px auto",
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButton-root": {
      margin: theme.spacing(0),
      padding: "10px 15px",
      color: "white",
      fontFamily: theme.typography.fontFamily,

      "&.Mui-selected": {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.contrastText,
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.contrastText,
      },
      "&:not(:last-of-type)": {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
  }),
);

export const StyledSortLabel = styled(Typography)(({ theme }) => ({
  color: "white",
  marginRight: theme.spacing(2),
}));
