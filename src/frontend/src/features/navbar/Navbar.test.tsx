import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import logo from "../../assets/Logo.png";

describe("Navbar", () => {
  it("should render the logo image", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Logo")).toBeDefined();
  });

  it("Should render the logo image with correct src", () => {
    render(<Navbar />);
    const logoImage = screen.getByAltText("Logo") as HTMLImageElement;
    expect(logoImage.src).toContain(logo);
  });

  it("should match Navbar snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
