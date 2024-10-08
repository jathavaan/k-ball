import { TableBody, TableCell, TableRow, Paper, TableContainer } from "@mui/material";
import { PlayerStatsProps, PlayerStatsTableProps } from "./playerStatsTable.types";
import { StyledPlayerStatsTable, StyledTableHead } from "./playerStatsTable.style";

export const PlayerStatsTable = (props: PlayerStatsTableProps) => {
  const { playerStatsTable } = props; 

  return (
    <TableContainer component={Paper}>
      <StyledPlayerStatsTable>
        <StyledTableHead>
          <TableRow>
            <TableCell>Season</TableCell>
            <TableCell align="right">Goals</TableCell>
            <TableCell align="right">Assists</TableCell>
            <TableCell align="right">Appearances</TableCell>
            <TableCell align="right">Yellow Cards</TableCell>
            <TableCell align="right">Red Cards</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {playerStatsTable.map((row: PlayerStatsProps) => (
            <TableRow key={row.season}>
              <TableCell component="th" scope="row">
                {row.season}
              </TableCell>
              <TableCell align="right">{row.goals}</TableCell>
              <TableCell align="right">{row.assists}</TableCell>
              <TableCell align="right">{row.appearances}</TableCell>
              <TableCell align="right">{row.yellowCards}</TableCell>
              <TableCell align="right">{row.redCards}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledPlayerStatsTable>
    </TableContainer>
  );
};
