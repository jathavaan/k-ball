﻿import { render, screen } from "@testing-library/react";
import { LinearProgressBar } from "@features/ui";

describe("LinearProgressBar", () => {
  it("Should render the LinearProgressBar", () => {
    render(<LinearProgressBar />);

    const progressBarElement = screen.getByTestId("linear-progress-bar");
    expect(progressBarElement).toBeDefined();
  });

  it("Should match LinearProgressBar snapshot", () => {
    const { asFragment } = render(<LinearProgressBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
