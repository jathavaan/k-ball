import { styled } from "@mui/material/styles";
import { Table, TableRow, TableHead, TableCell, Rating } from "@mui/material";

export const StyledPlayerRatingTable = styled(Table)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.contrastText,
  width: "100%",
  border: `1px solid grey`,
  borderCollapse: "collapse",
  borderRadius: "8px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "transparent",
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

export const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: "ffb400",
    marginRight: "5px",
  },
  "& .MuiRating-iconEmpty": {
    color: theme.palette.grey[500],
    marginRight: "5px",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({}));
