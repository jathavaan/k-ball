import { HomePage } from "./pages/HomePage.tsx";
import { Container } from "@mui/material";
import { PlayerDashboard } from "./pages/PlayerDashboard.tsx";

function App() {
  return (
    <>
        <HomePage/>
      <Container>
      <PlayerDashboard />
      </Container>
    </>
  );
}

export default App;
