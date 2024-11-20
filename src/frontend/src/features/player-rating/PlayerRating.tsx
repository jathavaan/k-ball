import {
  Button,
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
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { PlayerRatingProps } from "./playerRating.types.ts";
import { StyledRating } from "./playerRating.style.ts";
import { useSelector } from "react-redux";
import {
  selectAttack,
  selectAverage,
  selectDefence,
  selectIntelligence,
  selectIsEditingPlayerRating,
  selectPassing,
} from "./playerRating.slice.ts";
import Grid from "@mui/material/Grid2";

export const PlayerRating = ({ playerId }: PlayerRatingProps) => {
  const attack = useSelector(selectAttack);
  const defence = useSelector(selectDefence);
  const passing = useSelector(selectPassing);
  const intelligence = useSelector(selectIntelligence);
  const average = useSelector(selectAverage);
  const isEditingPlayerRating = useSelector(selectIsEditingPlayerRating);

  const {
    overallRating,
    isOverallRatingPending,
    isOverallRatingError,
    isUserRatingLoading,
    isUserRatingError,
    isSaveUserRatingPending,
    isSaveUserRatingError,
    handleSaveChanges,
    onClearClick,
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
              <Grid container spacing={2}>
                <Grid size={{ xs: isEditingPlayerRating ? 9 : 12 }}>
                  <Button
                    fullWidth
                    disabled={isSaveUserRatingPending}
                    endIcon={
                      isSaveUserRatingPending && (
                        <CircularProgressBar size={25} />
                      )
                    }
                    startIcon={
                      isEditingPlayerRating ? (
                        <SaveIcon />
                      ) : isSaveUserRatingPending ? null : (
                        <EditIcon />
                      )
                    }
                    onClick={
                      isEditingPlayerRating ? handleSaveChanges : onEditClick
                    }
                    text={
                      isEditingPlayerRating
                        ? "Save changes"
                        : isSaveUserRatingPending
                          ? "Saving..."
                          : "Edit rating"
                    }
                  />
                </Grid>
                {isEditingPlayerRating && (
                  <Grid size={{ xs: 3 }}>
                    <Button
                      text="Clear"
                      endIcon={<ClearIcon />}
                      onClick={() => onClearClick()}
                    />
                  </Grid>
                )}
              </Grid>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
