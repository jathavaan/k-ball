import { styled, Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: "50px",
  padding: "10px 30px",
  align: "center",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#F28B82",
  },
}));
