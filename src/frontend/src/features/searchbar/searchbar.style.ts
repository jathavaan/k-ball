import { IconButton, styled, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export const StyledSearchTextInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    backgroundColor: "transparent",
    height: "100%",
    padding: "0.4rem 0rem",
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
    padding: "0",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
    caretColor: theme.palette.primary.contrastText,
    "&::placeholder": {
      fontStyle: "italic",
      color: theme.palette.text.disabled,
    },
  },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  borderBottom: `0.1rem solid ${theme.palette.text.disabled}`,
})) as typeof Grid;

export const StyledIconButton = styled(IconButton)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
})) as typeof IconButton;

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.text.disabled,
  transition: "0.1s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.contrastText,
  },
}));
export const StyledSearchOffIcon = styled(SearchOffIcon)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const StyledClearIcon = styled(ClearIcon)(({ theme }) => ({
  color: theme.palette.text.disabled,
  transition: "0.1s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.contrastText,
  },
}));
