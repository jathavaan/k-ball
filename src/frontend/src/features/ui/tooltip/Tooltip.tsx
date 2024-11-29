import { StyledTooltip } from "@features/ui/tooltip/tooltip.style.ts";
import { TooltipProps } from "@mui/material";

export const Tooltip = ({ title, children, ...props }: TooltipProps) => {
  return (
    <StyledTooltip title={title} {...props} arrow>
      {children}
    </StyledTooltip>
  );
};
