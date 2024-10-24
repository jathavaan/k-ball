// ArrowDownwardIcon.style.ts
import { CSSProperties } from "react";

export const arrowStyle: CSSProperties = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
  fontSize: "60px",
  cursor: "pointer",
  zIndex: 1000, // Ensure it's above other content
};
