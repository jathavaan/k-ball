import { Navbar } from "./features/navbar/Navbar.tsx";
import { PlayerDashboard } from "./pages/PlayerDashboard.tsx";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "115px" }}>
        <PlayerDashboard />
      </Container>
    </>
  );
}

export default App;
