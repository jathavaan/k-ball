import {
  StyledCheckBox,
  StyledMenuItem,
  StyledSelect,
} from "@features/ui/select/select.style.ts";
import { HelperText, ImageContainer } from "@features/ui";
import { Box } from "@mui/material";
import {
  MenuItemProps,
  SelectProps,
} from "@features/ui/select/select.types.ts";

export const Select = ({ children, description, ...props }: SelectProps) => {
  return (
    <>
      <HelperText description={description} />
      <StyledSelect
        {...props}
        disableUnderline
        MenuProps={{
          PaperProps: {
            style: { maxHeight: "27rem" },
          },
        }}
      >
        {children}
      </StyledSelect>
    </>
  );
};

export const MenuItem = ({ isChecked, endIcon, ...props }: MenuItemProps) => {
  return (
    <StyledMenuItem {...props}>
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
          alt={`End icon for ${endIcon}`}
          style={{ height: "1.5rem", width: "1.5rem" }}
        />
      ) : null}
    </StyledMenuItem>
  );
};
