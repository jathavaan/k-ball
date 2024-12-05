import { DataSource } from "typeorm";
import { ClubRepositoryServiceBase } from "../../../application/contracts";
import { mockDatabase } from "../../setup/mock.database";
import { container } from "../../../infrastructure/services/inversify.config";

describe("ClubRepository", () => {
  let dataSource: DataSource;
  let clubRepositoryService: ClubRepositoryServiceBase;
  beforeEach(async () => {
    dataSource = await mockDatabase();
    clubRepositoryService = container.get<ClubRepositoryServiceBase>(
      "ClubRepositoryServiceBase",
    );
  });

  afterEach(async () => {
    await dataSource.destroy();
  });

  it("should return all clubs sorted alphabetically", async () => {
    const expectedResult = [
      {
        id: 1,
        name: "FC Seoul",
        code: "FCS",
        logoUrl: "https://example.com/logos/fc-seoul.png",
        externalId: 101,
      },
      {
        id: 2,
        name: "Ulsan Hyundai",
        code: "UH",
        logoUrl: "https://example.com/logos/ulsan-hyundai.png",
        externalId: 102,
      },
      {
        id: 3,
        name: "Jeonbuk Hyundai Motors",
        code: "JHM",
        logoUrl: "https://example.com/logos/jeonbuk-hyundai-motors.png",
        externalId: 103,
      },
      {
        id: 4,
        name: "Pohang Steelers",
        code: "PS",
        logoUrl: "https://example.com/logos/pohang-steelers.png",
        externalId: 104,
      },
    ].sort((a, b) => a.name.localeCompare(b.name));

    const clubs = await clubRepositoryService.getClubs();
    expect(clubs).toHaveLength(expectedResult.length);
    expect(clubs).toEqual(expectedResult);
  });

  it("should return a club by name", async () => {
    const club = await clubRepositoryService.getClubByName(
      "Jeonbuk Hyundai Motors",
    );

    expect(club).toEqual({
      id: 3,
      name: "Jeonbuk Hyundai Motors",
      code: "JHM",
      logoUrl: "https://example.com/logos/jeonbuk-hyundai-motors.png",
      externalId: 103,
    });
  });

  it("should return null if a club is not found by name", async () => {
    const club = await clubRepositoryService.getClubByName("Not Found");
    expect(club).toBeNull();
  });

  it("should return a club by ID", async () => {
    const club = await clubRepositoryService.getClubByExternalId(103);
    expect(club).toEqual({
      id: 3,
      name: "Jeonbuk Hyundai Motors",
      code: "JHM",
      logoUrl: "https://example.com/logos/jeonbuk-hyundai-motors.png",
      externalId: 103,
    });
  });

  it("should return null if a club is not found by ID", async () => {
    const club = await clubRepositoryService.getClubByExternalId(999);
    expect(club).toBeNull();
  });
});
