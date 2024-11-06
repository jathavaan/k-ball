import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
  margin: "8px 0",
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.4rem",
  },
});
