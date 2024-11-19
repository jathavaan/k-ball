import { StyledCircularProgressBar } from "./circularProgressBar.style.ts";
import { CircularProgressProps } from "@mui/material";

export const CircularProgressBar = (props: CircularProgressProps) => {
  return <StyledCircularProgressBar {...props} />;
};
