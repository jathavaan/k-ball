import { CardHeader } from "../features/ui";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { useEffect, useRef, useState } from "react";

export const TemporaryHomepage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const tiltX = (mousePosition.y - (rect.top + rect.height / 2)) / 25;
      const tiltY = -(mousePosition.x - (rect.left + rect.width / 2)) / 25;

      buttonRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      buttonRef.current.style.boxShadow = `${tiltY}px ${-tiltX}px 15px rgba(0, 0, 0, 0.25)`;
    }
  }, [mousePosition]);
  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2}>
        <Grid>
          <CardHeader
            sx={{
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
            headerText="Welcome to K-Ball"
          />
          <CardHeader
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem" },
              color: "#b86a6b",
            }}
            headerText="Your K-League Player Hub"
          />
        </Grid>
        <Grid>
          <CardHeader
            sx={{
              fontSize: { xs: "0.5rem", sm: "1rem" },
            }}
            headerText="Explore the players of Korea's top football league with K-Ball. Get an overview of all K-League players, view detailed stats, and rate their performance. Join the community in shaping how players are ranked based on skill and game impact. Whether you're a fan or a football enthusiast, K-Ball offers a unique, interactive way to follow the K-League."
          />
        </Grid>
        <Grid>
          <Button
            ref={buttonRef}
            onClick={() => navigate("/project2/players")}
            sx={{
              color: "#ffffff",
              backgroundColor: "#b86a6b",
              textTransform: "none",
              transition: "transform 0.2s",
              fontSize: { xs: "0.5rem", sm: "1rem" },
              "&:hover": {
                transform: "scale(1.03)",
                backgroundColor: "#953c3d",
              },
            }}
          >
            Press me for more!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
