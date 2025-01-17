﻿import { DataSource } from "typeorm";
import { mockDatabase } from "../../setup/mock.database";
import { container } from "../../../infrastructure/services/inversify.config";
import { BirthPlaceRepositoryServiceBase } from "../../../application/contracts";

describe("BirthPlaceService", () => {
  let dataSource: DataSource;
  let birthPlaceRepositoryService: BirthPlaceRepositoryServiceBase;

  beforeEach(async () => {
    dataSource = await mockDatabase();
    birthPlaceRepositoryService =
      container.get<BirthPlaceRepositoryServiceBase>(
        "BirthPlaceRepositoryServiceBase",
      );
  });

  afterEach(async () => {
    await dataSource.destroy();
  });

  it("should return a birth place by name and country name", async () => {
    const result =
      await birthPlaceRepositoryService.getBirthPlaceByNameAndCountry(
        "Oslo",
        "Norway",
      );

    expect(result).toEqual({
      id: 1,
      name: "Oslo",
      country: {
        id: 1,
        name: "Norway",
        flagUrl: null,
      },
    });
  });

  it("should get birth place if it exists, and create it if it doesn't and return", async () => {
    const nonExistingBirthPlace =
      await birthPlaceRepositoryService.getBirthPlaceByNameAndCountry(
        "Bergen",
        "Norway",
      );

    expect(nonExistingBirthPlace).toBeNull();

    const addedBirthPlace =
      await birthPlaceRepositoryService.getBirthPlaceAddIfMissing(
        "Bergen",
        "Norway",
      );

    expect(addedBirthPlace).toEqual({
      id: 6,
      name: "Bergen",
      country: {
        id: 1,
        name: "Norway",
        flagUrl: null,
      },
    });
  });
});
