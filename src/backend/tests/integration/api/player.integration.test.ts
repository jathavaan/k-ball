import { DataSource } from "typeorm";
import { mockDatabase } from "../../setup/mock.database";
import { container } from "../../../infrastructure/services/inversify.config";
import {
  GetPlayersQuery,
  GetPlayersQueryHandler,
  GetPlayerStatisticsQuery,
  GetPlayerStatisticsQueryHandler,
} from "../../../application/features/player/query";

let dataSource: DataSource;

beforeEach(async () => {
  dataSource = await mockDatabase();
});

afterEach(async () => {
  await dataSource.destroy();
});

describe("GetPlayersQueryHandler", () => {
  let getPlayersQueryHandler: GetPlayersQueryHandler;

  beforeEach(async () => {
    getPlayersQueryHandler = container.get(GetPlayersQueryHandler);
  });

  it("should return a list of all players without filters", async () => {
    const query = new GetPlayersQuery({
      limit: 100,
      offset: 0,
      filters: {},
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;
    expect(players).toBeDefined();
    expect(players).toHaveLength(3);

    expect(players.every((player) => player.id)).toBe(true);
    expect(players.every((player) => player.fullName)).toBe(true);
    expect(players.every((player) => player.currentClub)).toBe(true);
    expect(players.every((player) => player.age)).toBe(true);
    expect(players.every((player) => player.birthDate)).toBe(true);

    expect(result.totalPages).toBe(1);
  });

  it("should return a list of players from Korea Republic", async () => {
    const query = new GetPlayersQuery({
      limit: 5,
      offset: 0,
      filters: {
        countryIds: [2],
      },
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;

    expect(players).toBeDefined();
    expect(players).toHaveLength(2);
    expect(
      players.every((player) => player.nationality === "Korea Republic"),
    ).toBe(true);
  });

  it("should return a list of players filtered by club", async () => {
    const query = new GetPlayersQuery({
      limit: 5,
      offset: 0,
      filters: {
        clubIds: [1],
      },
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;

    expect(players).toBeDefined();
    expect(players).toHaveLength(2);
    expect(players);
    expect(players.every((player) => player.currentClub === "FC Seoul")).toBe(
      true,
    );
  });

  it("should return a list of players filtered by club and country", async () => {
    const query = new GetPlayersQuery({
      limit: 5,
      offset: 0,
      filters: {
        clubIds: [1],
        countryIds: [2],
      },
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;

    expect(players).toBeDefined();
    expect(players).toHaveLength(1);
    expect(
      players.every((player) => player.nationality === "Korea Republic"),
    ).toBe(true);
    expect(players.every((player) => player.currentClub === "FC Seoul")).toBe(
      true,
    );
  });

  it("should return a list of players filtered by position", async () => {
    const query = new GetPlayersQuery({
      limit: 5,
      offset: 0,
      filters: {
        positionIds: [3],
      },
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;
    expect(players).toBeDefined();
    expect(
      players.every((player) => player.position === "Expected Position Name"),
    ).toBe(true); // Replace with actual position name from mock data
  });

  it("should return players sorted by name in ascending order", async () => {
    const query = new GetPlayersQuery({
      limit: 10,
      offset: 0,
      filters: {
        sortBy: "fullName",
        sortOrder: "ASC",
      },
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;
    expect(players).toBeDefined();
    expect(players).toEqual(
      players.sort((a, b) => a.fullName.localeCompare(b.fullName)),
    );
  });

  it("should return players sorted by name in descending order", async () => {
    const query = new GetPlayersQuery({
      limit: 10,
      offset: 0,
      filters: {
        sortBy: "fullName",
        sortOrder: "DESC",
      },
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;
    expect(players).toBeDefined();
    expect(players).toEqual(
      players.sort((a, b) => b.fullName.localeCompare(a.fullName)),
    );
  });

  it("should return no players if no match is found", async () => {
    const query = new GetPlayersQuery({
      limit: 10,
      offset: 0,
      filters: {
        search: "NonExistentPlayer",
      },
    });

    const result = await getPlayersQueryHandler.handle(query);
    const players = result.playerCards;
    expect(players).toBeDefined();
    expect(players).toHaveLength(0);
  });
});

describe("GetPlayerStatisticsQueryHandler", () => {
  let getPlayerStatisticsQueryHandler: GetPlayerStatisticsQueryHandler;

  beforeEach(() => {
    getPlayerStatisticsQueryHandler = container.get(
      GetPlayerStatisticsQueryHandler,
    );
  });

  it("should return statics for player", async () => {
    const query = new GetPlayerStatisticsQuery(1);
    const result = await getPlayerStatisticsQueryHandler.handle(query);

    expect(result).not.toBeNull();
    expect(result).toHaveLength(2);
  });

  it("should return statistics sorted by season year in descending order", async () => {
    const query = new GetPlayerStatisticsQuery(2);
    const result = await getPlayerStatisticsQueryHandler.handle(query);

    expect(result).not.toBeNull();
    expect(result!.map((vm) => vm.season)).toEqual(
      result!.map((vm) => vm.season).sort((a, b) => b - a),
    );
  });

  it("should return null for player that does not exist", async () => {
    const query = new GetPlayerStatisticsQuery(999);
    const result = await getPlayerStatisticsQueryHandler.handle(query);
    expect(result).toBeNull();
  });

  it("should throw error on undefined ID", async () => {
    const query = new GetPlayerStatisticsQuery(undefined!);
    await expect(async () => {
      await getPlayerStatisticsQueryHandler.handle(query);
    }).rejects.toThrow("PlayerId is required");
  });

  it("should throw error on negative ID", async () => {
    const query = new GetPlayerStatisticsQuery(-1);
    await expect(async () => {
      await getPlayerStatisticsQueryHandler.handle(query);
    }).rejects.toThrow("PlayerId must be greater than 0");
  });
});
