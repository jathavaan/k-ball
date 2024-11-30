import {
  StyledCheckBox,
  StyledMenuItem,
  StyledSelect,
} from "@features/ui/select/select.style.ts";
import { HelperText, ImageContainer } from "@features/ui";
import {
  MenuItemProps,
  SelectProps,
} from "@features/ui/select/select.types.ts";
import { Box, FormControl } from "@mui/material";

export const Select = ({
  children,
  description,
  labelId,
  ...props
}: SelectProps) => {
  return (
    <FormControl>
      <HelperText id={labelId} description={description} />
      <StyledSelect
        {...props}
        aria-describedby={labelId}
        MenuProps={{
          PaperProps: {
            style: { maxHeight: "27rem" },
          },
        }}
      >
        {children}
      </StyledSelect>
    </FormControl>
  );
};

export const MenuItem = ({ isChecked, endIcon, ...props }: MenuItemProps) => {
  return (
    <StyledMenuItem
      {...props}
      aria-selected={isChecked}
      aria-checked={isChecked}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <StyledCheckBox checked={isChecked} />
        {props.children}
      </Box>
      {endIcon ? (
        <ImageContainer
          src={endIcon!}
          alt={`End icon for menu item: ${endIcon}`}
          style={{ height: "1.5rem", width: "1.5rem" }}
        />
      ) : null}
    </StyledMenuItem>
  );
};
