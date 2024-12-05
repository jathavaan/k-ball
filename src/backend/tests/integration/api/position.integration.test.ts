import { DataSource } from "typeorm";
import {
  GetPositionsQuery,
  GetPositionsQueryHandler,
} from "../../../application/features/position/query";
import { mockDatabase } from "../../setup/mock.database";
import { container } from "../../../infrastructure/services/inversify.config";

describe("GetPositionsQueryHandler", () => {
  let dataSource: DataSource;
  let getPositionsQueryHandler: GetPositionsQueryHandler;

  beforeEach(async () => {
    dataSource = await mockDatabase();
    getPositionsQueryHandler = container.get(GetPositionsQueryHandler);
  });

  afterEach(async () => {
    await dataSource.destroy();
  });

  it("should return a list of positions", async () => {
    const result = await getPositionsQueryHandler.handle(
      new GetPositionsQuery(),
    );
    expect(result).toHaveLength(4);
  });
});
