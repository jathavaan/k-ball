import { styled } from "@mui/material/styles";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.light,
  borderRadius: "0.4rem",
  alignItems: "self-start",
  marginBottom: "1rem",
}));

export const StyledListItemTextAuthor = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.grey.A200,
  margin: 0,
  "& .MuiTypography-root": {
    fontSize: "0.6rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.8rem",
    },
  },
}));

export const StyledListItemTextTitle = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginBottom: 3,
  "& .MuiTypography-root": {
    fontSize: "0.9rem",
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
}));

export const StyledListItemTextContent = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  "& .MuiTypography-root": {
    fontSize: "0.8rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem",
    },
  },
}));

export const StyledListItemTextButton = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.grey.A200,
  margin: 0,
  "& .MuiTypography-root": {
    fontSize: "0.7rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.8rem",
    },
  },
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: 7,
  padding: 0,
}));
