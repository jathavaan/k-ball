import { styled, Select, FormControl } from "@mui/material";

export const StyledSortContainer = styled(FormControl)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "200px",
  margin: "0 auto 20px auto",
  backgroundColor: theme.palette.primary.contrastText,
  padding: "0",
  borderRadius: "8px",
}));

export const StyledSortSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  padding: "8px",
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.primary.contrastText,
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
    padding: "5px 5px",
    fontSize: "16px",
    color: theme.palette.primary.dark,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.primary.dark,
  },
}));
