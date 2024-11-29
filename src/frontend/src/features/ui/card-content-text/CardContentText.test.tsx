import { render, screen } from "@testing-library/react";
import { CardContentText } from "@features/ui";

describe("CardContentText", () => {
  it("Should render the title and text", () => {
    const mockProps = {
      title: "Test Title",
      text: "Test Text",
    };

    render(<CardContentText {...mockProps} />);

    expect(screen.getByText(`${mockProps.title}:`)).toBeDefined();
    expect(screen.getByText(mockProps.text)).toBeDefined();
  });

  it("Should match CardContentText snapshot", () => {
    const mockProps = {
      title: "Test Title",
      text: "Test Text",
    };

    const { asFragment } = render(<CardContentText {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
