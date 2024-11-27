import { render, screen } from "@testing-library/react";
import { Logo } from "@/assets";
import { Navbar } from "@features/navbar/Navbar";

describe("Navbar", () => {
  it("should render the logo image", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Logo")).toBeDefined();
  });

  it("Should render the logo image with correct src", () => {
    render(<Navbar />);
    const logoImage = screen.getByAltText("Logo") as HTMLImageElement;
    expect(logoImage.src).toContain(Logo);
  });

  it("should match Navbar snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
