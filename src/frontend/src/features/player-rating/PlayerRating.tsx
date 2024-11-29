import {
  CircularProgressBar,
  ErrorAlert,
  FloatingActionButton,
  Rating,
  Text,
} from "@features/ui";
import {
  usePlayerRating,
  usePlayerRatingEdit,
} from "@features/player-rating/playerRating.hooks.ts";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { PlayerRatingProps } from "@features/player-rating/playerRating.types.ts";
import { useSelector } from "react-redux";
import {
  selectAttack,
  selectAverage,
  selectDefence,
  selectIntelligence,
  selectIsEditingPlayerRating,
  selectIsPlayerRatingInDb,
  selectPassing,
} from "@features/player-rating/playerRating.slice.ts";
import { Add } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import {
  StyledGridContainer,
  StyledGridItem,
} from "@features/player-rating/playerRating.style.ts";

export const PlayerRating = ({ playerId }: PlayerRatingProps) => {
  const attack = useSelector(selectAttack);
  const defence = useSelector(selectDefence);
  const passing = useSelector(selectPassing);
  const intelligence = useSelector(selectIntelligence);
  const average = useSelector(selectAverage);
  const isEditingPlayerRating = useSelector(selectIsEditingPlayerRating);
  const isPlayerRatingInDb = useSelector(selectIsPlayerRatingInDb);

  const {
    overallRating,
    isOverallRatingPending,
    isOverallRatingError,
    userRating,
    isUserRatingLoading,
    isUserRatingError,
    isSaveUserRatingPending,
    isSaveUserRatingError,
    isDeletePlayerRatingPending,
    isDeletePlayerRatingError,
    handleSaveChanges,
    handleClear,
    handleDelete,
  } = usePlayerRating(playerId);

  const {
    handleAttackChange,
    handleDefenceChange,
    handlePassingChange,
    handleIntelligenceChange,
    onEditClick,
  } = usePlayerRatingEdit();

  return (
    <StyledGridContainer
      container
      spacing={2}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <StyledGridContainer container size={{ xs: 12, md: 6 }} spacing={1}>
        {isOverallRatingError && (
          <StyledGridItem size={{ xs: 12 }}>
            <ErrorAlert message="Failed to load player's overall rating" />
          </StyledGridItem>
        )}
        <StyledGridItem
          size={{ xs: 12 }}
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.dark,
          })}
        >
          <Text
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              fontSize: "1rem",
              fontWeight: 200,
            })}
            text="See what other K-Ballers think"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly
            value={overallRating?.attack}
            isLoading={isOverallRatingPending}
            ratingText="Attack"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly
            value={overallRating?.defence}
            precision={0.1}
            isLoading={isOverallRatingPending}
            ratingText="Defence"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly
            value={overallRating?.passing}
            precision={0.1}
            isLoading={isOverallRatingPending}
            ratingText="Passing"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly
            value={overallRating?.intelligence}
            precision={0.1}
            isLoading={isOverallRatingPending}
            ratingText="Intelligence"
          />
        </StyledGridItem>

        <StyledGridItem
          container
          size={{ xs: 12 }}
          spacing={0}
          sx={(theme) => ({
            minHeight: "4rem",
            backgroundColor: theme.palette.secondary.main,
          })}
        >
          <StyledGridItem size={{ xs: 12 }}>
            <Rating
              readOnly
              value={overallRating?.average}
              precision={0.1}
              isAverage
              isLoading={isOverallRatingPending}
              ratingText="Average rating"
            />
          </StyledGridItem>
        </StyledGridItem>
      </StyledGridContainer>
      <StyledGridContainer container size={{ xs: 12, md: 6 }} spacing={1}>
        {isUserRatingError && (
          <StyledGridItem size={{ xs: 12 }}>
            <ErrorAlert message="Failed to load user's rating" />
          </StyledGridItem>
        )}

        {isSaveUserRatingError && (
          <StyledGridItem size={{ xs: 12 }}>
            <ErrorAlert message="Failed to save user's rating" />
          </StyledGridItem>
        )}

        {isDeletePlayerRatingError && (
          <StyledGridItem size={{ xs: 12 }}>
            <ErrorAlert message="Failed to delete player rating" />
          </StyledGridItem>
        )}

        <StyledGridItem
          size={{ xs: 12 }}
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.dark,
          })}
        >
          <Text
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              fontSize: "1rem",
              fontWeight: 200,
            })}
            text="Share your ratings with the K-Ball community"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly={!isEditingPlayerRating}
            isEditing={isEditingPlayerRating}
            value={attack}
            onChange={(_, rating) => handleAttackChange(rating)}
            isLoading={isUserRatingLoading}
            ratingText="Attack"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly={!isEditingPlayerRating}
            isEditing={isEditingPlayerRating}
            value={defence}
            onChange={(_, rating) => handleDefenceChange(rating)}
            isLoading={isUserRatingLoading}
            ratingText="Defence"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly={!isEditingPlayerRating}
            isEditing={isEditingPlayerRating}
            value={passing}
            onChange={(_, rating) => handlePassingChange(rating)}
            isLoading={isUserRatingLoading}
            ratingText="Passing"
          />
        </StyledGridItem>
        <StyledGridItem size={{ xs: 12 }}>
          <Rating
            readOnly={!isEditingPlayerRating}
            isEditing={isEditingPlayerRating}
            value={intelligence}
            onChange={(_, rating) => handleIntelligenceChange(rating)}
            isLoading={isUserRatingLoading}
            ratingText="Intelligence"
          />
        </StyledGridItem>
        <StyledGridItem
          container
          size={{ xs: 12 }}
          spacing={0}
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            minHeight: "4rem",
          })}
        >
          <StyledGridItem size={{ xs: 12 }}>
            <Rating
              readOnly
              value={average}
              isAverage
              isLoading={isUserRatingLoading}
              ratingText="Average rating"
            />
          </StyledGridItem>
        </StyledGridItem>
      </StyledGridContainer>
      <StyledGridItem
        size={{ xs: 12 }}
        sx={() => ({
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "right",
        })}
      >
        {isEditingPlayerRating && (userRating || isPlayerRatingInDb) && (
          <FloatingActionButton
            onClick={() => handleDelete()}
            disabled={isUserRatingLoading || isDeletePlayerRatingPending}
            sx={(theme) => ({
              backgroundColor: theme.palette.common.black,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            })}
            aria-label="delete player rating"
            tooltipTitle="Delete your rating"
          >
            {isUserRatingLoading || isDeletePlayerRatingPending ? (
              <CircularProgressBar size={20} />
            ) : (
              <DeleteIcon />
            )}
          </FloatingActionButton>
        )}

        {isEditingPlayerRating && (
          <FloatingActionButton
            onClick={() => handleSaveChanges()}
            aria-label="save your player rating"
            tooltipTitle={
              isPlayerRatingInDb ? "Save changes" : "Publish rating"
            }
          >
            {isPlayerRatingInDb ? <SaveIcon /> : <CloudUploadIcon />}
          </FloatingActionButton>
        )}
        {isEditingPlayerRating && isPlayerRatingInDb && (
          <FloatingActionButton
            color="primary"
            variant="extended"
            onClick={() => handleClear()}
            aria-label="reset player rating"
            tooltipTitle="Restore to last save"
          >
            <RestoreIcon />
          </FloatingActionButton>
        )}
        <FloatingActionButton
          variant="extended"
          disabled={isSaveUserRatingPending || isOverallRatingPending}
          onClick={() => onEditClick()}
          aria-label="edit player rating"
          tooltipTitle={
            isEditingPlayerRating
              ? "Cancel"
              : isPlayerRatingInDb
                ? "Edit your rating"
                : "Add your rating"
          }
          sx={{
            marginRight: 0,
          }}
        >
          {isUserRatingLoading || isSaveUserRatingPending ? (
            <CircularProgressBar size={20} />
          ) : isEditingPlayerRating ? (
            <ClearIcon />
          ) : !isUserRatingLoading && !isPlayerRatingInDb ? (
            <Add />
          ) : (
            <EditIcon />
          )}
        </FloatingActionButton>
      </StyledGridItem>
    </StyledGridContainer>
  );
};
