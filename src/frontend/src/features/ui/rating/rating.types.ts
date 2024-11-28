import { RatingProps as MuiRatingProps } from "@mui/material";
export interface RatingProps extends MuiRatingProps {
  ratingText: string;
  isEditing?: boolean;
  isAverage?: boolean;
  isLoading?: boolean;
}
