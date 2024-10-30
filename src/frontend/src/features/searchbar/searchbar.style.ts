import { styled, TextField } from "@mui/material";

export const StyledSearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto 20px auto",
  padding: "0px",
  backgroundColor: "transparent",
  borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
}));

export const StyledSearchInput = styled(TextField)(({ theme }) => ({
  padding: "10px 0",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    padding: "0",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    padding: "5px",
    fontSize: "16px",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
    caretColor: theme.palette.primary.contrastText,
    "&::placeholder": {
      fontStyle: "italic",
      color: theme.palette.text.disabled,
    },
  },
}));
export const StyledClearButton = styled("button")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "50px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "#888",
  height: "100%",
  width: "40px",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
  "&:active": {
    color: theme.palette.primary.contrastText,
  },
}));

export const StyledSearchButton = styled("button")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "#888",
  height: "100%",
  width: "40px",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
  "&:active": {
    color: theme.palette.primary.contrastText,
  },
}));
