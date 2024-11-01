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

  async getPositionByName(positionName: string) {
    return await this.dbContext.findOne(Position, {
      where: {
        name: positionName,
      },
    });
  }

  async getPositionAddIfMissing(positionName: string) {
    if (positionName === "Forward") positionName = "Attacker";
    return await this.dbContext.transaction(
      async (transactionEntityManager) => {
        const position = await this.getPositionByName(positionName);

        if (position) {
          return position;
        }

        const newPosition = new Position();
        newPosition.name = positionName;

        await transactionEntityManager.save(Position, newPosition);
        return (await this.getPositionByName(positionName))!;
      },
    );
  }
}
