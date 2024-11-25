import {
  CircularProgressBar,
  ErrorAlert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "../ui";
import { usePlayerRating, usePlayerRatingEdit } from "./playerRating.hooks.ts";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import { PlayerRatingProps } from "./playerRating.types.ts";
import {
  StyledRating,
  StyledSpeedDial,
  StyledSpeedDialAction,
  StyledSpeedDialIcon,
} from "./playerRating.style.ts";
import { useSelector } from "react-redux";
import {
  selectAttack,
  selectAverage,
  selectDefence,
  selectIntelligence,
  selectIsEditingPlayerRating,
  selectIsPlayerRatingInDb,
  selectPassing,
} from "./playerRating.slice.ts";
import Grid from "@mui/material/Grid2";
import { Add } from "@mui/icons-material";

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
    <TableContainer>
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
              {!isOverallRatingPending ? (
                <StyledRating readOnly value={overallRating?.attack} />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
            <TableCell>
              {!isUserRatingLoading ? (
                <StyledRating
                  readOnly={!isEditingPlayerRating}
                  value={attack}
                  onChange={(_, rating) => handleAttackChange(rating)}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Defence</TableCell>
            <TableCell>
              {!isOverallRatingPending ? (
                <StyledRating
                  readOnly
                  value={overallRating?.defence}
                  precision={0.1}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
            <TableCell>
              {!isUserRatingLoading ? (
                <StyledRating
                  readOnly={!isEditingPlayerRating}
                  value={defence}
                  onChange={(_, rating) => handleDefenceChange(rating)}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Passing</TableCell>
            <TableCell>
              {!isOverallRatingPending ? (
                <StyledRating
                  readOnly
                  value={overallRating?.passing}
                  precision={0.1}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
            <TableCell>
              {!isUserRatingLoading ? (
                <StyledRating
                  readOnly={!isEditingPlayerRating}
                  value={passing}
                  onChange={(_, rating) => handlePassingChange(rating)}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Intelligence</TableCell>
            <TableCell>
              {!isOverallRatingPending ? (
                <StyledRating
                  readOnly
                  value={overallRating?.intelligence}
                  precision={0.1}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
            <TableCell>
              {!isUserRatingLoading ? (
                <StyledRating
                  readOnly={!isEditingPlayerRating}
                  value={intelligence}
                  onChange={(_, rating) => handleIntelligenceChange(rating)}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Average</TableCell>
            <TableCell>
              {!isOverallRatingPending ? (
                <StyledRating
                  readOnly
                  value={overallRating?.average}
                  precision={0.1}
                />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
            <TableCell>
              {!isUserRatingLoading ? (
                <StyledRating readOnly value={average} />
              ) : (
                <CircularProgressBar size={20} />
              )}
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}></TableCell>
            <TableCell colSpan={2}>
              <Grid container spacing={2}></Grid>
              <StyledSpeedDial
                icon={
                  <StyledSpeedDialIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={
                      isSaveUserRatingPending ||
                      isOverallRatingPending ||
                      isDeletePlayerRatingPending ? (
                        <CircularProgressBar size={25} />
                      ) : isEditingPlayerRating ? (
                        <EditIcon />
                      ) : (
                        <ExpandLessIcon sx={{ transform: "rotate(-90deg)" }} />
                      )
                    }
                    openIcon={
                      !isSaveUserRatingPending &&
                      !isOverallRatingPending &&
                      !isDeletePlayerRatingPending && <ThumbsUpDownIcon />
                    }
                  />
                }
                ariaLabel="Add or edit rating"
                direction="left"
              >
                <StyledSpeedDialAction
                  icon={
                    !isUserRatingLoading && !isPlayerRatingInDb ? (
                      <Add />
                    ) : (
                      <EditIcon />
                    )
                  }
                  tooltipTitle={
                    !isUserRatingLoading && !userRating
                      ? "Add rating"
                      : "Edit rating"
                  }
                  onClick={() => onEditClick()}
                />
                {isEditingPlayerRating && (
                  <StyledSpeedDialAction
                    icon={<SaveIcon />}
                    tooltipTitle="Save changes"
                    onClick={() => handleSaveChanges()}
                  />
                )}

                {isEditingPlayerRating && (
                  <StyledSpeedDialAction
                    icon={<ClearIcon />}
                    tooltipTitle="Clear changes"
                    onClick={() => handleClear()}
                  />
                )}

                {userRating && (
                  <StyledSpeedDialAction
                    icon={<DeleteIcon />}
                    tooltipTitle="Delete rating"
                    onClick={() => handleDelete()}
                  />
                )}
              </StyledSpeedDial>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
