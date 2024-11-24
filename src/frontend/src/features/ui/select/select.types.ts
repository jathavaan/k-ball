import {
  BaseSelectProps,
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material";
import React from "react";

export interface SelectProps extends BaseSelectProps {
  children: React.ReactNode[];
  description: string;
  labelId: string;
}

export interface MenuItemProps extends MuiMenuItemProps {
  isChecked: boolean;
  endIcon?: string;
}
