import {
  TableBodyProps,
  TableCellProps,
  TableContainerProps,
  TableFooterProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "@mui/material";
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableContainer,
  StyledTableFooter,
  StyledTableHead,
  StyledTableRow,
} from "@features/ui/table/table.style";

export const TableContainer = ({ children, ...props }: TableContainerProps) => {
  return <StyledTableContainer {...props}>{children}</StyledTableContainer>;
};

export const Table = ({ children, ...props }: TableProps) => {
  return <StyledTable {...props}>{children}</StyledTable>;
};
export const TableHead = ({ children, ...props }: TableHeadProps) => {
  return <StyledTableHead {...props}>{children}</StyledTableHead>;
};
export const TableCell = ({ children, ...props }: TableCellProps) => {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
};

export const TableBody = ({ children, ...props }: TableBodyProps) => {
  return <StyledTableBody {...props}>{children}</StyledTableBody>;
};

export const TableFooter = ({ children, ...props }: TableFooterProps) => {
  return <StyledTableFooter {...props}>{children}</StyledTableFooter>;
};

export const TableRow = ({ children, ...props }: TableRowProps) => {
  return <StyledTableRow {...props}>{children}</StyledTableRow>;
};
