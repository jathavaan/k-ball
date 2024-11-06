import {
  ArrowDownwardIcon,
  Button,
  ImageContainer,
  Text,
} from "../../features/ui";
import Home from "../../assets/home.jpg";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ImageContainer
          src={Home}
          alt={"PageImage"}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            marginTop: "-50px",
          }}
        />
        <ArrowDownwardIcon
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        />
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            bgcolor: "primary.dark",
          }}
        >
          <Text
            text="Welcome to the Korean football league"
            sx={{ color: "#CC6469", fontSize: "2rem", textAlign: "center" }}
          />
          <Button
            onClick={() => navigate("/project2/login")}
            text="Log in"
            sx={{ mt: 2, width: "auto" }}
          />
        </Box>
      </div>
    </>
  );
};
