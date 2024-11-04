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

export const PlayerRating: React.FC = () => {
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
          {["Attack", "Defence", "Passes", "Intelligence", "Average"].map(
            (category, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>
                  <Typography variant="body1">{category}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledRating
                    name={`overall-${category.toLowerCase()}`}
                    readOnly={category === "Average"}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <StyledRating
                    name={`your-${category.toLowerCase()}`}
                    readOnly={category === "average"}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ),
          )}
        </TableBody>
      </StyledPlayerRatingTable>
      <Button text="Edit your rating" sx={{ mt: 2 }}></Button>
    </TableContainer>
  );
};
