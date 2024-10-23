import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./features/navbar/Navbar.tsx";
import { PlayerDashboard, PlayerProfile, TemporaryHomepage } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container style={{ marginTop: "115px" }}>
          <Routes>
            <Route path="/project2" element={<TemporaryHomepage />} />
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
