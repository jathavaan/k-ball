import React from "react";
import { Typography, TableBody, TableContainer } from "@mui/material";
import {
  StyledPlayerRatingTable,
  StyledRating,
  StyledTableHead,
  StyledTableCell,
  StyledTableRow,
} from "./playerRating.style.ts";
import { Button } from "../ui/button/Button.tsx";
import { usePlayerRating } from "./playerRating.hooks.ts";
import { CategoryRatings } from "./playerRating.slice.ts";

interface PlayerRatingProps {
  playerId: string;
}

export const PlayerRating: React.FC<PlayerRatingProps> = ({ playerId }) => {
  const {
    playerRatings,
    isEditing,
    handleEdit,
    handleSaveChanges,
    temporaryRating,
    handleRatingChange,
  } = usePlayerRating(playerId);

  return (
    <TableContainer
      sx={(theme) => ({
        marginTop: "1rem",
        overflowX: "auto",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          display: "block",
        },
      })}
    >
      <StyledPlayerRatingTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Overall Rating</StyledTableCell>
            <StyledTableCell>Your Rating</StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {["Attack", "Defence", "Passing", "Intelligence", "Average"].map(
            (category, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>
                  <Typography variant="body1">{category}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledRating
                    name={`overall-${category.toLowerCase()}`}
                    value={playerRatings.overall?.[category] || 0}
                    readOnly
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <StyledRating
                    name={`your-${category.toLowerCase()}`}
                    value={
                      isEditing
                        ? temporaryRating?.[category as keyof CategoryRatings]
                        : playerRatings.usePlayerRating?.[category] || 0
                    }
                    readOnly
                    onChange={(
                      _,
                      newValue, //fjernet event
                    ) =>
                      isEditing &&
                      newValue !== null &&
                      handleRatingChange(
                        category as keyof CategoryRatings,
                        newValue,
                      )
                    }
                  />
                </StyledTableCell>
              </StyledTableRow>
            ),
          )}
        </TableBody>
      </StyledPlayerRatingTable>
      {isEditing ? (
        <Button
          onClick={handleSaveChanges}
          text="Save changes"
          sx={{ mt: 2 }}
        />
      ) : (
        <Button onClick={handleEdit} text="Edit your rating" sx={{ mt: 2 }} />
      )}
    </TableContainer>
  );
};
