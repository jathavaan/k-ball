import {
  Checkbox,
  FormHelperText,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

export const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
  padding: "0.4rem 0.8rem",
  borderRadius: "0.4rem",
  border: "none",
  outline: "none",
  "&:hover": {
    border: "none",
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
  },
}));

export const StyledHelperText = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "1.0rem",
  margin: "0rem",
}));

export const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
