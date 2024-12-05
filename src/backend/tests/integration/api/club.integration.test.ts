import { mockDatabase } from "../../setup/mock.database";
import { DataSource } from "typeorm";
import {
  GetClubsQuery,
  GetClubsQueryHandler,
} from "../../../application/features/club/query";
import { container } from "../../../infrastructure/services/inversify.config";

describe("GetClubsQueryHandler", () => {
  let dataSource: DataSource;
  let getClubsQueryHandler: GetClubsQueryHandler;

  beforeEach(async () => {
    dataSource = await mockDatabase();
    getClubsQueryHandler = container.get(GetClubsQueryHandler);
  });

  afterEach(async () => {
    await dataSource.destroy();
  });

  it("should return a list of clubs", async () => {
    const result = await getClubsQueryHandler.handle(new GetClubsQuery());
    expect(result).toHaveLength(4);
  });
});
