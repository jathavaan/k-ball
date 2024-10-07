import { render, screen } from "@testing-library/react";
import { PlayerCardProps } from "./playerCard.types.ts";
import { PlayerCard } from "./PlayerCard";

const mockPlayerCardProps: PlayerCardProps = {
  playerId: 2890,
  name: "Jo Hyeon-Woo",
  team: "Ulsan Hyundai FC",
  imageUrl: "https://media.api-sports.io/football/players/2890.png",
  position: "Goalkeeper",
  nationality: "Korea Republic",
  age: 33,
};

describe("PlayerCard", () => {
  it("Should render the player name", () => {
    render(<PlayerCard {...mockPlayerCardProps} />);
    expect(screen.getByText(mockPlayerCardProps.name)).toBeDefined();
  });

  it("Should render the player team", () => {
    render(<PlayerCard {...mockPlayerCardProps} />);
    expect(screen.getByText(mockPlayerCardProps.team)).toBeDefined();
  });

  it("Should render the player position", () => {
    render(<PlayerCard {...mockPlayerCardProps} />);
    expect(screen.getByText(mockPlayerCardProps.position)).toBeDefined();
  });

  it("Should render the player nationality", () => {
    render(<PlayerCard {...mockPlayerCardProps} />);
    expect(screen.getByText(mockPlayerCardProps.nationality)).toBeDefined();
  });

  it("Should render player age", () => {
    render(<PlayerCard {...mockPlayerCardProps} />);
    expect(screen.getByText(mockPlayerCardProps.age)).toBeDefined();
  });

  it("Should match PlayerCard snapshot", () => {
    const { asFragment } = render(<PlayerCard {...mockPlayerCardProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
