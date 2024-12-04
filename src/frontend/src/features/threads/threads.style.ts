import { FormControl, List, styled } from "@mui/material";

export const StyledList = styled(List)(() => ({
  marginBottom: 0,
  width: "100%",
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  backgroundColor: theme.palette.primary.light,
  borderRadius: "0.4rem",
  padding: "0.5rem",
  marginTop: 0,
  marginBottom: "0.5rem",
}));
