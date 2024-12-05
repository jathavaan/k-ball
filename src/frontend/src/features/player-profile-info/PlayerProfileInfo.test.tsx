import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlayerProfileInfo } from "@features/player-profile-info/PlayerProfileInfo";
import { PlayerProfileInfoProps } from "@features/player-profile-info/playerProfileInfo.types.ts";

describe("PlayerProfileInfo", () => {
  const mockProps: PlayerProfileInfoProps = {
    playerId: 2898,
    fullName: "Kim Young-Gwon",
    currentClub: "Ulsan Hyundai FC",
    clubLogoUrl: "https://media.api-sports.io/football/teams/2767.png",
    imageUrl: "https://media.api-sports.io/football/players/2898.png",
    position: "Defender",
    nationality: "Korea Republic",
    flagUrl: "https://media.api-sports.io/flags/kr.svg",
    age: 34,
    birthDate: "1990-02-27",
    height: 186,
    weight: 74,
    place: "Jeonju, Korea Republic",
  };

  beforeEach(() => {
    render(<PlayerProfileInfo {...mockProps} />);
  });

  it("should render the player's name", () => {
    expect(screen.getByText(mockProps.fullName)).toBeInTheDocument();
  });

  it("should render the player's age", () => {
    expect(
      screen.getByText(`${mockProps.age.toString()} years`),
    ).toBeInTheDocument();
  });

  it("should render the player's position", () => {
    expect(screen.getByText(mockProps.position)).toBeInTheDocument();
  });

  it("should render the player's team", () => {
    expect(screen.getByText(mockProps.currentClub)).toBeInTheDocument();
  });

  it("should render the player's nationality", () => {
    expect(screen.getByText(mockProps.nationality)).toBeInTheDocument();
  });

  it("should render the player's place of birth", () => {
    expect(screen.getByText(mockProps.place)).toBeInTheDocument();
  });

  it("should render the player's height", () => {
    expect(screen.getByText(`${mockProps.height} cm`)).toBeInTheDocument();
  });

  it("should render the player's weight", () => {
    expect(screen.getByText(`${mockProps.weight} kg`)).toBeInTheDocument();
  });

  it("should render the player's birth date", () => {
    expect(screen.getByText(mockProps.birthDate)).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { asFragment } = render(<PlayerProfileInfo {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
