import { StyledFloatingActionButton } from "@features/ui/floating-action-button/floatingActionButton.style.ts";
import { Tooltip } from "@features/ui";
import { FloatingActionButtonProps } from "@features/ui/floating-action-button/floatingActionButton.types.ts";

export const FloatingActionButton = ({
  tooltipTitle,
  children,
  disabled,
  ...props
}: FloatingActionButtonProps) => {
  if (disabled) {
    return (
      <StyledFloatingActionButton
        {...props}
        disabled={disabled}
        variant="extended"
        size="small"
      >
        {children}
      </StyledFloatingActionButton>
    );
  }
  return (
    <Tooltip title={tooltipTitle}>
      <StyledFloatingActionButton {...props} variant="extended" size="small">
        {children}
      </StyledFloatingActionButton>
    </Tooltip>
  );
};
