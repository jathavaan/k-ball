import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlayerDashboard } from "./pages/PlayerDashboard.tsx";
import { PlayerProfile } from "./pages/PlayerProfile.tsx";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Routes>
            <Route path="/project2/players" element={<PlayerDashboard />} />
            <Route
              path="/project2/players/:playerId"
              element={<PlayerProfile />}
            />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
