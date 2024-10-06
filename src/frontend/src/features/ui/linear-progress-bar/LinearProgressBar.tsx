import { StyledLinearProgressBar } from "./linearProgressBar.style.ts";
import { LinearProgressProps } from "@mui/material";

export const LinearProgressBar = (props: LinearProgressProps) => {
  return (
    <StyledLinearProgressBar data-testid="linear-progress-bar" {...props} />
  );
};
