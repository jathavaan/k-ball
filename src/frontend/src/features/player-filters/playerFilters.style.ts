import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.dark,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.primary.contrastText,
  },
  borderRadius: "0.4rem",
  padding: "10px 10px",
  height: "auto",
  pointerEvents: "auto",
  width: "100%",
}));
