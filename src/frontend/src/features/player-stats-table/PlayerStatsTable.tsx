import { Paper, TableContainer } from "@mui/material";
import {
  PlayerStatsProps,
  PlayerStatsTableProps,
} from "./playerStatsTable.types";
import {
  StyledPlayerStatsTable,
  StyledTableHead,
  StyledTableCell,
  StyledTableBody,
  StyledTableRow,
} from "./playerStatsTable.style";

export const PlayerStatsTable = (props: PlayerStatsTableProps) => {
  const { playerStatsTable } = props;

  return (
    <TableContainer
      component={Paper}
      sx={(theme) => ({
        borderRadius: "8px",
        marginTop: "16px",
        overflowX: "auto",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          display: "block",
        },
      })}
    >
      <StyledPlayerStatsTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell>Season</StyledTableCell>
            <StyledTableCell align="right">Goals</StyledTableCell>
            <StyledTableCell align="right">Assists</StyledTableCell>
            <StyledTableCell align="right">Appearances</StyledTableCell>
            <StyledTableCell align="right">Yellow Cards</StyledTableCell>
            <StyledTableCell align="right">Red Cards</StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {playerStatsTable.map((row: PlayerStatsProps) => (
            <StyledTableRow key={row.season}>
              <StyledTableCell component="th" scope="row">
                {row.season}
              </StyledTableCell>
              <StyledTableCell align="right">{row.goals}</StyledTableCell>
              <StyledTableCell align="right">{row.assists}</StyledTableCell>
              <StyledTableCell align="right">{row.appearances}</StyledTableCell>
              <StyledTableCell align="right">{row.yellowCards}</StyledTableCell>
              <StyledTableCell align="right">{row.redCards}</StyledTableCell>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledPlayerStatsTable>
    </TableContainer>
  );
};
