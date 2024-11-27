import { ImageContainerProps } from "@features/ui/image-container/imageContainer.types.ts";
import { StyledImage } from "@features/ui/image-container/imageContainer.style.ts";

export const ImageContainer = (props: ImageContainerProps) => {
  return <StyledImage {...props} />;
};
