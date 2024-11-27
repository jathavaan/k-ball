import { RatingProps as MuiRatingProps } from "@mui/material";
export interface RatingProps extends MuiRatingProps {
  isEditing?: boolean;
  isAverage?: boolean;
  isLoading?: boolean;
}
