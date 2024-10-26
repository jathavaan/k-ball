import { styled, TextField } from "@mui/material";

export const StyledSearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center", // Midtstiller søkebaren horisontalt
  alignItems: "center",     // Sørger for at alt er sentrert vertikalt
  width: "100%",
  maxWidth: "600px",         // Begrens bredde på containeren
  margin: "0 auto",          // Sørger for at containeren er midtstilt
  padding: "5px 0",          // Litt padding for å gi luft rundt input-feltet
  backgroundColor: "transparent", // Containeren er gjennomsiktig
  borderBottom: `2px solid ${theme.palette.primary.contrastText}`, // Custom underline

}));

export const StyledSearchInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent", // Gjør bakgrunnen gjennomsiktig
    padding: "0",  // Fjern unødvendig padding for å sikre rett linje
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
    fontSize: theme.typography.body1.fontSize, // Bruker tekststørrelse fra `theme`
    fontFamily: theme.typography.fontFamily,  // Bruker font fra `theme`
    fontWeight: theme.typography.body1.fontWeight, // Bruker riktig fonttykkelse
    color: theme.palette.primary.contrastText, // Tekstfarge
    caretColor: theme.palette.primary.contrastText, // Farge på markøren
    "&::placeholder": {
      fontStyle: "italic", // Placeholder tekst i kursiv
      color: theme.palette.text.disabled, // Lysere placeholder-farge
    },
  },
}));


