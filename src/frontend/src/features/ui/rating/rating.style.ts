import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";

export const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    marginRight: "0.25rem",
  },
  "& .MuiRating-iconEmpty": {
    color: theme.palette.primary.contrastText,
    marginRight: "0.25rem",
  },
}));

export const StyledAverageRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    marginRight: "0.25rem",
  },
  "& .MuiRating-iconEmpty": {
    color: theme.palette.primary.contrastText,
    marginRight: "0.25rem",
  },
}));
