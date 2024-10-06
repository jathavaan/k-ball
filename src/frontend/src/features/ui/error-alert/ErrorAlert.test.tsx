import { render, screen } from "@testing-library/react";
import { ErrorAlert } from "./ErrorAlert";

describe("Tests for ErrorAlert", () => {
  it("Should render the error message", () => {
    const mockProps = {
      message: "Test Error Message",
    };

    render(<ErrorAlert {...mockProps} />);

    expect(screen.getByText(mockProps.message)).toBeDefined();
  });

  it("Should match ErrorAlert snapshot", () => {
    const mockProps = {
      message: "Test Error Message",
    };

    const { asFragment } = render(<ErrorAlert {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
