import { DataSource } from "typeorm";
import { mockDatabase } from "../../setup/mock.database";
import { container } from "../../../infrastructure/services/inversify.config";
import {
  GetCountriesQuery,
  GetCountriesQueryHandler,
} from "../../../application/features/country/query";

describe("GetCountriesQueryHandler", () => {
  let dataSource: DataSource;
  let getCountriesQueryHandler: GetCountriesQueryHandler;

  beforeEach(async () => {
    dataSource = await mockDatabase();
    getCountriesQueryHandler = container.get(GetCountriesQueryHandler);
  });

  afterEach(async () => {
    await dataSource.destroy();
  });

  it("should return a list of countries that have players", async () => {
    const result = await getCountriesQueryHandler.handle(
      new GetCountriesQuery(),
    );

    expect(result).toHaveLength(2);
  });

  it("should return South Korea and Brazil", async () => {
    const expectedResult = [
      {
        id: 2,
        name: "Korea Republic",
        flagUrl: null,
      },
      {
        id: 3,
        name: "Brazil",
        flagUrl: null,
      },
    ];

    const result = await getCountriesQueryHandler.handle(
      new GetCountriesQuery(),
    );

    expect(result).toHaveLength(2);
    expect(result).toEqual(expectedResult);
  });

  it("should not contain Norway", async () => {
    const result = await getCountriesQueryHandler.handle(
      new GetCountriesQuery(),
    );
    expect(result).not.toContain({ id: 1, name: "Norway", flagUrl: null });
  });
});
