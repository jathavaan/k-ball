import { styled } from "@mui/material/styles";
import {
  Container,
  Paper,
  Box,
  Button,
  TextField,
  Typography,
  Link,
} from "@mui/material";

export const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "100vh",
  paddingTop: "5rem",
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  width: "100%",
  maxWidth: "400px",
  fontFamily: theme.typography.fontFamily,
}));

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyledButton = styled(Button)({
  marginTop: "1rem",
  marginBottom: "1rem",
});

export const StyledTextField = styled(TextField)({
  margin: "8px 0",
});

export const StyledLink = styled(Link)(({ theme }) => ({
  marginTop: "1rem",
  fontFamily: theme.typography.fontFamily,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  fontFamily: theme.typography.fontFamily,
}));
