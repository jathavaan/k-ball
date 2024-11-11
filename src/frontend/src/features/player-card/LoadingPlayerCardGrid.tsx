import { Card, CardContent, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

const LoadingPlayerCard = () => (
  <Card sx={{ width: "100%", height: "100%" }}>
    <CardContent>
      <Skeleton variant="rectangular" width="100%" height={140} />
      <Skeleton variant="text" sx={{ mt: 2, width: "60%" }} />
      <Skeleton variant="text" sx={{ width: "40%" }} />
      <Skeleton variant="text" sx={{ width: "30%" }} />
      <Skeleton variant="text" sx={{ width: "50%" }} />
    </CardContent>
  </Card>
);

export const LoadingPlayerCardGrid = () => (
  <Grid container spacing={2}>
    {Array.from(new Array(8)).map((_, index) => (
      <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
        <LoadingPlayerCard />
      </Grid>
    ))}
  </Grid>
);
