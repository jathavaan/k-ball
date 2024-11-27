import { LinearProgressProps } from "@mui/material";
import { StyledLinearProgressBar } from "@features/ui/linear-progress-bar/linearProgressBar.style.ts";

export const LinearProgressBar = (props: LinearProgressProps) => {
  return (
    <StyledLinearProgressBar data-testid="linear-progress-bar" {...props} />
  );
};
