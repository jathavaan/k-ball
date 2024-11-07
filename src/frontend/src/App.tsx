import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./features/navbar/Navbar.tsx";
import {
  HomePage,
  LoginPage,
  PlayerDashboard,
  PlayerProfile,
  SignUp,
} from "./pages";
import { isUserLoggedIn } from "./features/auth/auth.hooks.ts";
import { ReactElement } from "react";

type ProtectedRouteProps = {
  element: ReactElement;
};
const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  return isUserLoggedIn() ? element : <LoginPage />;
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container style={{ marginTop: "115px" }}>
          <Routes>
            <Route path="/project2" element={<HomePage />} />
            <Route path="/project2/login" element={<LoginPage />} />
            <Route path="/project2/register" element={<SignUp />} />
            <Route
              path="/project2/players"
              element={<ProtectedRoute element={<PlayerDashboard />} />}
            />
            <Route
              path="/project2/players/:playerId"
              element={<ProtectedRoute element={<PlayerProfile />} />}
              // element={<PlayerProfile />}
            />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
