import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PlayerStatsProps, PlayerStatsTableProps } from "./playerStatsTable.types";

export const PlayerStatsTable = (props: PlayerStatsTableProps) => {
  const { playerStatsTable } = props; // Hent ut playerStatsTable fra props

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Season</TableCell>
            <TableCell align="right">Goals</TableCell>
            <TableCell align="right">Assists</TableCell>
            <TableCell align="right">Appearances</TableCell>
            <TableCell align="right">Yellow Cards</TableCell>
            <TableCell align="right">Red Cards</TableCell>
          </TableRow>
        </TableHead>
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
      </Table>
    </TableContainer>
  );
};
