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
import { Rating, PlayerRatingProps } from "./playerRating.types.ts";

export const PlayerRating: React.FC<PlayerRatingProps> = ({ playerId }) => {
  const {
    playerRatings,
    isEditing,
    handleEdit,
    handleSaveChanges,
    temporaryRating,
    handleRatingChange,
  } = usePlayerRating(playerId);

  const ratingCategories = ["Attack", "Defence", "Passing", "Intelligence"];

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
          {ratingCategories.map((category, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                <Typography variant="body1">{category}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <StyledRating
                  name={`overall-${category.toLowerCase()}`}
                  value={playerRatings.overall?.[category as keyof Rating] || 0}
                  readOnly
                />
              </StyledTableCell>
              <StyledTableCell>
                <StyledRating
                  name={`your-${category.toLowerCase()}`}
                  value={
                    isEditing
                      ? temporaryRating?.[
                          category.toLowerCase() as keyof Rating
                        ]
                      : playerRatings.userRating?.[
                          category.toLowerCase() as keyof Rating
                        ] || 0
                  }
                  readOnly={!isEditing}
                  onChange={(_, newValue) =>
                    isEditing &&
                    newValue !== null &&
                    handleRatingChange(
                      category.toLowerCase() as keyof Rating,
                      newValue,
                    )
                  }
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell>
              <Typography variant="body1">Average</Typography>
            </StyledTableCell>
            <StyledTableCell>
              <StyledRating
                name="overall-average"
                value={
                  (playerRatings.overall &&
                    Object.values(playerRatings.overall).reduce(
                      (a, b) => a + b,
                      0,
                    ) / ratingCategories.length) ||
                  0
                }
                readOnly
              />
            </StyledTableCell>
            <StyledTableCell>
              <StyledRating
                name="your-average"
                value={
                  isEditing
                    ? (temporaryRating &&
                        Object.values(temporaryRating).reduce(
                          (a, b) => a + b,
                          0,
                        ) / ratingCategories.length) ||
                      0
                    : (playerRatings.userRating &&
                        Object.values(playerRatings.userRating).reduce(
                          (a, b) => a + b,
                          0,
                        ) / ratingCategories.length) ||
                      0
                }
                readOnly
              />
            </StyledTableCell>
          </StyledTableRow>
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
