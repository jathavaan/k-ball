import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.primary.contrastText,
  borderRadius: "0.4rem",
  padding: "10px 30px",
  align: "center",
  textTransform: "none",
  minHeight: "2.4rem",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.primary.contrastText,
  },
}));
