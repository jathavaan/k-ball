import { Alert, styled } from "@mui/material";

export const StyledErrorAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  contrastText: theme.palette.error.contrastText,
  borderRadius: "0.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
