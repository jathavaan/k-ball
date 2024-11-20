import Home from "../../assets/home.webp";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../features/auth/auth.hooks.ts";
import { Button, Text } from "../../features/ui";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={Home}
        alt="Home page image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Text
          text="Welcome to the Korean football league"
          sx={{ color: "#CC6469", fontSize: "2rem", textAlign: "center" }}
        />
        {!isUserLoggedIn() ? (
          <Button
            onClick={() => navigate("/project2/login")}
            text="Log in"
            sx={{ mt: 2, width: "auto", borderRadius: "50px" }}
          />
        ) : (
          <Button
            onClick={() => navigate("/project2/players")}
            text="See players"
            sx={{ mt: 2, width: "auto", borderRadius: "50px" }}
          />
        )}
      </Box>
    </Box>
  );
};
