import { styled } from "@mui/material/styles";
import { Container, Link, Paper, Typography } from "@mui/material";

export const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "5rem",
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  width: "100%",
  maxWidth: "400px",
  fontFamily: theme.typography.fontFamily,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  marginTop: "1rem",
  fontFamily: theme.typography.fontFamily,
  cursor: "pointer",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  fontFamily: theme.typography.fontFamily,
}));
