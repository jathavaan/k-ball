import { StyledAverageRating, StyledRating } from "./rating.style.ts";
import { RatingProps } from "./rating.types.ts";
import { CircularProgressBar } from "../circular-progress-bar/CircularProgressBar.tsx";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export const Rating = ({
  isEditing,
  isAverage,
  isLoading,
  ...props
}: RatingProps) => {
  if (isLoading) return <CircularProgressBar size={22} />;
  if (isAverage)
    return (
      <StyledAverageRating
        emptyIcon={
          <StarIcon
            sx={(theme) => ({
              color: theme.palette.primary.dark,
            })}
          />
        }
        precision={0.01}
        {...props}
      />
    );
  if (isEditing)
    return <StyledRating emptyIcon={<StarBorderIcon />} {...props} />;
  return <StyledRating emptyIcon={<StarIcon />} {...props} />;
};
