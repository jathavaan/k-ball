import { render, screen } from "@testing-library/react";
import { CardHeader } from "./CardHeader";

describe("Tests for CardHeader", () => {
  it("Should render the header text", () => {
    const mockProps = {
      headerText: "Test Header",
    };

    render(<CardHeader {...mockProps} />);

    expect(screen.getByText(mockProps.headerText)).toBeDefined();
  });

  it("Should match CardHeader snapshot", () => {
    const mockProps = {
      headerText: "Test Header",
    };

    const { asFragment } = render(<CardHeader {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
