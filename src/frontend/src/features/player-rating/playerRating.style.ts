import { styled } from "@mui/material/styles";
import {
  Rating,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";

export const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: "ffb400",
    marginRight: "5px",
  },
  "& .MuiRating-iconEmpty": {
    color: theme.palette.grey[500],
    marginRight: "5px",
  },
}));

export const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  "& .MuiFab-root": {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
  },
  "& .MuiFab-root:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));
export const StyledSpeedDialIcon = styled(SpeedDialIcon)(() => ({}));

export const StyledSpeedDialAction = styled(SpeedDialAction)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.dark,
}));
