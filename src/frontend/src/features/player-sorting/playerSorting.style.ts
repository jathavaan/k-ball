import { styled, Typography, ToggleButtonGroup } from "@mui/material";

export const StyledSortContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "flex-start",
  width: "100%",
  maxWidth: "400px",
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButton-root": {
      margin: theme.spacing(0),
      padding: "0.4rem 0.8rem",
      color: "white",
      fontFamily: theme.typography.fontFamily,
      width: "100%",
      "&.Mui-selected": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
        },
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

styled(Typography)(({ theme }) => ({
  color: "white",
  marginRight: theme.spacing(2),
}));
