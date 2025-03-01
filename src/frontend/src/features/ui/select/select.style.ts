﻿import { Checkbox, MenuItem, Select, styled } from "@mui/material";

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
    backgroundColor: "#e7e7e9",
    color: theme.palette.primary.main,
  },
}));

export const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
