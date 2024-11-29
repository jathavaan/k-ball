import { TextProps } from "@features/ui/text/text.types.ts";
import React from "react";

export interface CardTextProps extends TextProps {
  icon: React.ReactNode;
  secondary?: boolean;
}
