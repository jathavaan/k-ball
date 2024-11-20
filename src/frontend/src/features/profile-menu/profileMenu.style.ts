import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  styled,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

export const StyledProfileIcon = styled(AccountCircleIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2.5rem",
}));

export const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2.5rem",
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    minWidth: "23rem",
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  width: "100%",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
})) as typeof ListItem;

export const StyledList = styled(List)(() => ({
  marginTop: "6rem",
  padding: 0,
})) as typeof List;

export const StyledListItemButton = styled(ListItemButton)(() => ({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent", // Removes the hover effect
  },
})) as typeof ListItemButton;

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
})) as typeof ListItemIcon;
