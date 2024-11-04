import { styled, FormHelperText } from "@mui/material";

export const StyledHelperText = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "1.0rem",
  margin: "0rem",
}));
