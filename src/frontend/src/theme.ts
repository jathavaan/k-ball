import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#34374c",
      light: "#5f6175",
      dark: "#1a1c31",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#b86a6b",
      light: "#d88a8b",
      dark: "#953c3d",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ffa726",
      light: "#ffd95b",
      dark: "#c77800",
      contrastText: "#000000",
    },
    info: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      contrastText: "#000000",
    },
    success: {
      main: "#66bb6a",
      light: "#98ee99",
      dark: "#338a3e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#e0e0e0",
      paper: "#ffffff",
    },
    text: {
      primary: "#1c1c1c",
      secondary: "#003478",
      disabled: "#9e9e9e",
    },
    divider: "#bdbdbd",
    action: {
      active: "#34374c",
      hover: "#5f6175",
      selected: "#b86a6b",
      disabled: "#d3d3d3",
      disabledBackground: "#f5f5f5",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: "5rem",
        },
      },
    },
  },
  typography: {
    fontFamily: "Outfit, Arial, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
  },
});
