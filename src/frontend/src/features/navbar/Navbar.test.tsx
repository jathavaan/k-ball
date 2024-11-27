import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import logo from "../../assets/logo.webp";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });
  it("should render the logo image", () => {
    expect(screen.getByAltText("Logo")).toBeDefined();
  });

  it("Should render the logo image with correct src", () => {
    const logoImage = screen.getByAltText("Logo") as HTMLImageElement;
    expect(logoImage.src).toContain(logo);
  });

  it("should match Navbar snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
