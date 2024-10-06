import { Alert, styled } from "@mui/material";

export const StyledErrorAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  contrastText: theme.palette.error.contrastText,
}));
