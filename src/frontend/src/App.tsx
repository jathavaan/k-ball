import { Container } from "@mui/material";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar } from "./features/navbar/Navbar.tsx";
import {
  HomePage,
  LoginPage,
  PageNotFound,
  PlayerDashboard,
  PlayerProfile,
  SignUp,
} from "./pages";
import { isUserLoggedIn } from "./features/auth/auth.hooks.ts";
import { ReactElement } from "react";
import { ProfileMenuDrawer } from "./features/profile-menu";

type ProtectedRouteProps = {
  element: ReactElement;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  if (isUserLoggedIn()) {
    return element;
  } else {
    return <Navigate to="/project2/login" />;
  }
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ProfileMenuDrawer />
        <Container style={{ marginTop: "115px" }}>
          <Routes>
            <Route path="/project2" element={<HomePage />} />
            <Route path="/project2/login" element={<LoginPage />} />
            <Route path="/project2/register" element={<SignUp />} />
            <Route
              path="/project2/players/"
              element={<ProtectedRoute element={<PlayerDashboard />} />}
            />
            <Route
              path="/project2/players/:playerId"
              element={<ProtectedRoute element={<PlayerProfile />} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
