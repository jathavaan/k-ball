import Grid from "@mui/material/Grid2";
import { Button, Text } from "../../features/ui";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../features/auth/auth.hooks.ts";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Text
          text="404 Page Not Found"
          sx={{
            fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
            fontWeight: "bold",
            color: "#fff",
          }}
        />
      </Grid>
      <Grid
        size={{ xs: 12 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            borderRadius: "100rem",
          }}
          text={"Back to home"}
          onClick={() => {
            if (isUserLoggedIn()) {
              navigate("/project2/players");
            } else {
              navigate("/project2/");
            }
          }}
        />
      </Grid>
    </Grid>
  );
};
