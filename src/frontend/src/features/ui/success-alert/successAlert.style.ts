import { Alert, styled } from "@mui/material";

export const StyledSuccessAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  contrastText: theme.palette.success.contrastText,
  borderRadius: "0.4rem",
  width: "100%",
}));
