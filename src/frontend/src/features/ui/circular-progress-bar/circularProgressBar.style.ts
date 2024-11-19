import { CircularProgress, styled } from "@mui/material";

export const StyledCircularProgressBar = styled(CircularProgress)(
  ({ theme }) => ({
    color: theme.palette.primary.contrastText,
  }),
);
