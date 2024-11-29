import { StyledAverageRating, StyledRating } from "./rating.style.ts";
import { RatingProps } from "./rating.types.ts";
import { CircularProgressBar } from "../circular-progress-bar/CircularProgressBar.tsx";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
import { Text } from "@features/ui";

export const Rating = ({
  ratingText,
  isEditing,
  isAverage,
  isLoading,
  ...props
}: RatingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "3.72rem",
      }}
    >
      {isLoading ? (
        <CircularProgressBar size={15} />
      ) : isAverage ? (
        <StyledAverageRating
          emptyIcon={
            <StarIcon
              sx={(theme) => ({
                color: theme.palette.primary.dark,
              })}
            />
          }
          precision={0.1}
          {...props}
        />
      ) : isEditing ? (
        <StyledRating emptyIcon={<StarBorderIcon />} {...props} />
      ) : (
        <StyledRating emptyIcon={<StarIcon />} {...props} />
      )}
      <Text
        text={ratingText}
        sx={(theme) => ({
          color: theme.palette.primary.contrastText,
          textTransform: "lowercase",
          fontSize: "0.8rem",
        })}
      />
    </Box>
  );
};
