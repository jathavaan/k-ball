import { Button } from "../features/ui/button/Button";
import { ImageContainer } from "../features/ui/image-container/ImageContainer";
import front3 from "../assets/front3.jpg";
import { Text } from "../features/ui/text/Text"; // Adjust the import path as necessary
import { Box } from "@mui/material";
import ArrowDownwardIcon from "../features/ArrowDownwardIcon/ArrowDownwardIcon";

export const HomePage = () => {
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
          src={front3}
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
          <Button text="Log in" sx={{ mt: 2, width: "auto" }} />
        </Box>
      </div>
    </>
  );
};
