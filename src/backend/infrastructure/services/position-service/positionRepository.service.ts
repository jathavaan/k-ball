import { injectable } from "inversify";
import { PositionRepositoryServiceBase } from "../../../application/contracts";
import { KBallDbContext } from "../../persistence/dataSource";
import { Position } from "../../../domain/entities";

@injectable()
export class PositionRepositoryService
  implements PositionRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;

  async getPositions(): Promise<Position[]> {
    return await this.dbContext.find(Position);
  }
}
