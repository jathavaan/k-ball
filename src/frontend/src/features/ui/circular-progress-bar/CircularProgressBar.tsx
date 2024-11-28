import { CircularProgressProps } from "@mui/material";
import { StyledCircularProgressBar } from "@features/ui/circular-progress-bar/circularProgressBar.style.ts";

export const CircularProgressBar = (props: CircularProgressProps) => {
  return <StyledCircularProgressBar {...props} />;
};
