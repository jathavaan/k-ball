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
      margin: theme.spacing(0.5),
      padding: "10px 15px",
      color: "white",
      "&:not(:first-of-type)": {
        marginLeft: 0,
      },
      "&.Mui-selected, &:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
      },
    },
  }),
);

export const StyledSortLabel = styled(Typography)(({ theme }) => ({
  color: "white",
  marginRight: theme.spacing(2),
}));
