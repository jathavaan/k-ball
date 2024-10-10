import { AppBar, Toolbar, Button, styled } from "@mui/material";


export const StyledAppBar= styled(AppBar)(({ theme }) => ({
    backgroundColor: "#ffffff",
    padding: "0.3rem",
    position: "fixed",  // Flytter navbaren til fast posisjon på toppen
    top: 0,            
    left: 0, 
    width: "100%",      // Får navbaren til å dekke hele bredden
    zIndex: theme.zIndex.drawer + 1, // Sørger for at navbaren vises over annet innhold
    
  }));

export const StyledToolbar= styled(Toolbar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: "0.3rem",
}));

export const LogoButton = styled(Button)(({ theme }) => ({
    padding: 0, 
  }));
  
  export const LogoImage = styled("img")({
    height: "60px",
    transition: "transform 0.3s ease", 
  "&:hover": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }
  });