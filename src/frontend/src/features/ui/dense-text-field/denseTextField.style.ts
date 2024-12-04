import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: "0.4rem",
  maxWidth: "65%",
  margin: "0.4rem 0",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
  "& .MuiOutlinedInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-error fieldset": {
      borderColor: "transparent",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));
