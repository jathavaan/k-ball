import { PlayerDashboard } from "./pages/PlayerDashboard.tsx";
import { PlayerProfile } from "./pages/PlayerProfile.tsx";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./features/navbar/Navbar.tsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Container style={{ marginTop: "115px" }}>
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
