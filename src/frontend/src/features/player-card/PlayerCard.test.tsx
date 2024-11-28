import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { PlayerCardProps } from "@features/player-card/playerCard.types.ts";
import { PlayerCard } from "@features/player-card/PlayerCard.tsx";

const mockPlayerCardProps: PlayerCardProps = {
  playerId: 2890,
  fullName: "Jo Hyeon-Woo",
  currentClub: "Ulsan Hyundai FC",
  imageUrl: "https://media.api-sports.io/football/players/2890.png",
  position: "Goalkeeper",
  nationality: "Korea Republic",
  age: 33,
};

describe("PlayerCard", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PlayerCard {...mockPlayerCardProps} />
      </MemoryRouter>,
    );
  });

  it("Should render the player name", () => {
    expect(screen.getByText(mockPlayerCardProps.fullName)).toBeInTheDocument();
  });

  it("Should render the player team", () => {
    expect(
      screen.getByText(mockPlayerCardProps.currentClub),
    ).toBeInTheDocument();
  });

  it("Should render the player position", () => {
    expect(screen.getByText(mockPlayerCardProps.position)).toBeInTheDocument();
  });

  it("Should render the player nationality", () => {
    expect(
      screen.getByText(mockPlayerCardProps.nationality),
    ).toBeInTheDocument();
  });

  it("Should render player age", () => {
    expect(
      screen.getByText(mockPlayerCardProps.age.toString()),
    ).toBeInTheDocument();
  });

  it("Should match PlayerCard snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PlayerCard {...mockPlayerCardProps} />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
