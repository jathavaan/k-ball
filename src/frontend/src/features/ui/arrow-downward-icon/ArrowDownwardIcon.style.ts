import { styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const StyledArrow = styled(ExpandMoreIcon)(({ theme }) => ({
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  color: theme.palette.primary.contrastText,
  fontSize: "60px",
  cursor: "pointer",
  zIndex: 1000,
}));
