import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

export const StyledTable = styled(Table)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  width: "100%",
  borderCollapse: "collapse",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
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
  justifyContent: "center",
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
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
}));

export const StyledTableFooter = styled(TableFooter)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: "0.5rem",
  overflowX: "auto",
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "block",
  },
}));
