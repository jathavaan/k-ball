import { styled, TextField } from "@mui/material";

export const StyledSearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center", // Sentrert vertikalt
  width: "100%",
  maxWidth: "500px", // Begrens bredde på containeren
  margin: "0 auto 20px auto", // Sørger for at containeren er midtstilt og har luft under
  padding: "0px", // Fjerner padding
  backgroundColor: "transparent", // Containeren er gjennomsiktig
  borderBottom: `2px solid ${theme.palette.primary.contrastText}`, // Custom underline
}));

export const StyledSearchInput = styled(TextField)(({ theme }) => ({
  padding: "10px 0", // Tilpasser padding for å få input-feltet nærmere underlinjen
  width: "100%",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent", // Gjør bakgrunnen gjennomsiktig
    padding: "0", // Fjern unødvendig padding for å sikre at input-feltet er nær underlinjen
    "& fieldset": {
      border: "none", // Fjerner andre grenser rundt input-feltet
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    padding: "5px",
    fontSize: "16px", // Samme fontstørrelse som i forrige prosjekt
    fontFamily: theme.typography.fontFamily, // Bruker font fra `theme`
    color: theme.palette.primary.contrastText, // Tekstfarge
    caretColor: theme.palette.primary.contrastText, // Farge på markøren
    "&::placeholder": {
      fontStyle: "italic", // Placeholder tekst i kursiv
      color: theme.palette.text.disabled, // Lysere placeholder-farge
    },
  },
}));
export const StyledClearButton = styled("button")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "50px", // Plasserer Clear-ikonet til venstre for input-feltet
  top: "50%", // Vertikal sentrering
  transform: "translateY(-50%)", // Justerer for å midtstille ikonet
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "#888",
  height: "100%",
  width: "40px",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
  "&:active": {
    color: theme.palette.primary.contrastText,
  },
}));

export const StyledSearchButton = styled("button")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "10px", // Plasserer ikonet til høyre
  top: "50%", // Vertikal sentrering
  transform: "translateY(-50%)", // Justerer for å midtstille ikonet
  background: "none",
  border: "none",
  fontSize: "18px", // Samme størrelse som i forrige prosjekt
  cursor: "pointer",
  color: "#888",
  height: "100%",
  width: "40px",
  transition: "color 0.3s ease", // Smooth overgang for fargeendringer
  "&:hover": {
    color: theme.palette.primary.light, // Sterkere farge ved hover
  },
  "&:active": {
    color: theme.palette.primary.contrastText, // Enda sterkere farge når knappen trykkes
  },
}));
