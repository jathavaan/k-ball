import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";

export const StyledPlayerStatsTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  width: "100%",
  borderCollapse: "collapse",
  borderRadius: "8px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));
export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.contrastText,
  "& .MuiTableCell-head": {
    fontWeight: "bold",
    fontSize: "1rem",
    padding: "12px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
      padding: "8px",
    },
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "0.875rem",
  padding: "10px",
  borderBottom: `1px solid ${theme.palette.divider}`,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    padding: "6px",
  },
}));

export const StyledTableBody = styled(TableBody)(({ theme }) => ({
  "& .MuiTableRow-root": {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
