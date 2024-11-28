import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { PlayerStatsTable } from "@features/player-stats-table/PlayerStatsTable";
import { PlayerStatsProps } from "@features/player-stats-table/playerStatsTable.types";

describe("PlayerStatsTable", () => {
  const mockStats: PlayerStatsProps[] = [
    {
      playerId: 2898,
      season: 2021,
      goals: 3,
      assists: 2,
      appearances: 10,
      yellowCards: 1,
      redCards: 0,
    },
    {
      playerId: 2898,
      season: 2020,
      goals: 5,
      assists: 4,
      appearances: 15,
      yellowCards: 2,
      redCards: 0,
    },
  ];

  beforeEach(() => {
    render(<PlayerStatsTable playerStatsTable={mockStats} />);
  });

  it("should render the correct number of rows", () => {
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(3);
  });

  it("should render the correct stats for the 2021 season", () => {
    const season2021 = screen.getByText("2021");
    expect(season2021).toBeInTheDocument();

    const goals2021 = screen.getByText("3");
    expect(goals2021).toBeInTheDocument();

    const assists2021 = screen.getAllByText("2")[0];
    expect(assists2021).toBeInTheDocument();
  });

  it("should render the correct stats for the 2020 season", () => {
    const season2020 = screen.getByText("2020");
    expect(season2020).toBeInTheDocument();

    const goals2020 = screen.getByText("5");
    expect(goals2020).toBeInTheDocument();

    const yellowCards2020 = screen.getAllByText("2")[1];
    expect(yellowCards2020).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { asFragment } = render(
      <PlayerStatsTable playerStatsTable={mockStats} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
