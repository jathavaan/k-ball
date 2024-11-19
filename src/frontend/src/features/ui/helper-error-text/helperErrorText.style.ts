import { styled, FormHelperText } from "@mui/material";

export const StyledHelperErrorText = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "1.0rem",
  margin: "0rem",
}));
