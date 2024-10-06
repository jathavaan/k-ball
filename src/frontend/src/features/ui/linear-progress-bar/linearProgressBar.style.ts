import { LinearProgress, styled } from "@mui/material";

export const StyledLinearProgressBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
}));
