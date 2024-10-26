import { PositionRepositoryServiceBase } from "@application/contracts/positionRepository.service.base";
import { Position } from "@domain/entities";
import { KBallDbContext } from "@infrastructure/persistence/dataSource";
import { injectable } from "inversify";

@injectable()
export class PositionRepositoryService
  implements PositionRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;

  async getPositions(): Promise<Position[]> {
    return await this.dbContext.find(Position);
  }
}
