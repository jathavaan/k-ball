import { FabProps } from "@mui/material";
import { StyledFloatingActionButton } from "./floatingActionButton.style.ts";

export const FloatingActionButton = ({ children, ...props }: FabProps) => {
  return (
    <StyledFloatingActionButton {...props} size="small">
      {children}
    </StyledFloatingActionButton>
  );
};
