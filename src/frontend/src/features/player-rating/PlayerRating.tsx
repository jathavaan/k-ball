import {
  CircularProgressBar,
  ErrorAlert,
  FloatingActionButton,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
    <TableContainer
      sx={{
        paddingBottom: "0.4rem",
      }}
    >
      {isOverallRatingError && (
        <ErrorAlert message="Failed to load player's overall rating" />
      )}

      {isUserRatingError && (
        <ErrorAlert message="Failed to load user's rating" />
      )}

      {isSaveUserRatingError && (
        <ErrorAlert message="Failed to save user's rating" />
      )}

      {isDeletePlayerRatingError && (
        <ErrorAlert message="Failed to delete player rating" />
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Overall Rating</TableCell>
            <TableCell>Your Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Attack</TableCell>
            <TableCell>
              <Rating
                readOnly
                value={overallRating?.attack}
                isLoading={isOverallRatingPending}
              />
            </TableCell>
            <TableCell>
              <Rating
                readOnly={!isEditingPlayerRating}
                isEditing={isEditingPlayerRating}
                value={attack}
                onChange={(_, rating) => handleAttackChange(rating)}
                isLoading={isUserRatingLoading}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Defence</TableCell>
            <TableCell>
              <Rating
                readOnly
                value={overallRating?.defence}
                precision={0.1}
                isLoading={isOverallRatingPending}
              />
            </TableCell>
            <TableCell>
              <Rating
                readOnly={!isEditingPlayerRating}
                isEditing={isEditingPlayerRating}
                value={defence}
                onChange={(_, rating) => handleDefenceChange(rating)}
                isLoading={isUserRatingLoading}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Passing</TableCell>
            <TableCell>
              <Rating
                readOnly
                value={overallRating?.passing}
                precision={0.1}
                isLoading={isOverallRatingPending}
              />
            </TableCell>
            <TableCell>
              <Rating
                readOnly={!isEditingPlayerRating}
                isEditing={isEditingPlayerRating}
                value={passing}
                onChange={(_, rating) => handlePassingChange(rating)}
                isLoading={isUserRatingLoading}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Intelligence</TableCell>
            <TableCell>
              <Rating
                readOnly
                value={overallRating?.intelligence}
                precision={0.1}
                isLoading={isOverallRatingPending}
              />
            </TableCell>
            <TableCell>
              <Rating
                readOnly={!isEditingPlayerRating}
                isEditing={isEditingPlayerRating}
                value={intelligence}
                onChange={(_, rating) => handleIntelligenceChange(rating)}
                isLoading={isUserRatingLoading}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Average</TableCell>
            <TableCell>
              <Rating
                readOnly
                value={overallRating?.average}
                precision={0.1}
                isAverage
                isLoading={isOverallRatingPending}
              />
            </TableCell>
            <TableCell>
              <Rating
                readOnly
                value={average}
                isAverage
                isLoading={isUserRatingLoading}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <section
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "right",
        }}
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
      </section>
    </TableContainer>
  );
};
