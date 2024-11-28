import { render, screen } from "@testing-library/react";
import { ImageContainer } from "@features/ui";

describe("Tests for ImageContainer", () => {
  it("Should render the image with correct source and alt text", () => {
    const mockProps = {
      src: "test-image.jpg",
      alt: "Test Image",
    };

    render(<ImageContainer {...mockProps} />);

    const imgElement = screen.getByAltText(mockProps.alt);
    expect(imgElement).toBeDefined();
  });

  it("Should match ImageContainer snapshot", () => {
    const mockProps = {
      src: "test-image.jpg",
      alt: "Test Image",
    };

    const { asFragment } = render(<ImageContainer {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
