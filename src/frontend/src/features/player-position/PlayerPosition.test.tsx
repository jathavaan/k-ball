import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PlayerPosition } from "@features/player-position/PlayerPosition.tsx";
import {
  PositionAttack,
  PositionDefence,
  PositionGoalkeeper,
  PositionMidfield,
} from "@/assets";
import "@testing-library/jest-dom";

describe("PlayerPosition", () => {
  it("should render the midfielder position correctly", () => {
    render(<PlayerPosition position="midfielder" club="FC Barcelona" />);
    expect(screen.getByText("midfielder @ FC Barcelona")).toBeInTheDocument();
    expect(screen.getByAltText("Midfielder position card")).toHaveAttribute(
      "src",
      PositionMidfield,
    );
  });

  it("should render the attacker position correctly", () => {
    render(<PlayerPosition position="attacker" club="Real Madrid" />);
    expect(screen.getByText("attacker @ Real Madrid")).toBeInTheDocument();
    expect(screen.getByAltText("Attacker position card")).toHaveAttribute(
      "src",
      PositionAttack,
    );
  });

  it("should render the defender position correctly", () => {
    render(<PlayerPosition position="defender" club="Manchester United" />);
    expect(
      screen.getByText("defender @ Manchester United"),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Goalkeeper position card")).toHaveAttribute(
      "src",
      PositionDefence,
    );
  });

  it("should render the goalkeeper position correctly", () => {
    render(<PlayerPosition position="goalkeeper" club="Juventus" />);
    expect(screen.getByText("goalkeeper @ Juventus")).toBeInTheDocument();
    expect(screen.getByAltText("Goalkeeper position card")).toHaveAttribute(
      "src",
      PositionGoalkeeper,
    );
  });

  it("should show an error message if the position is not recognized", () => {
    render(<PlayerPosition position="unknown" club="Liverpool" />);
    expect(screen.getByText("unknown @ Liverpool")).toBeInTheDocument();
    expect(screen.getByText("Failed to load position")).toBeInTheDocument();
  });
});
