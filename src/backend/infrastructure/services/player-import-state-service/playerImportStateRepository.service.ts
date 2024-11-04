import { PlayerImportStateRepositoryServiceBase } from "../../../application/contracts/playerImportStateRepository.service.base";
import { injectable } from "inversify";
import { PlayerImportState } from "../../../domain/entities";
import { KBallDbContext } from "../../persistence/dataSource";

@injectable()
export class PlayerImportStateRepositoryService
  implements PlayerImportStateRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;
  async addPlayerImportState(): Promise<void> {
    await this.dbContext.save(PlayerImportState, new PlayerImportState());
  }
  async getPlayerImportState(): Promise<PlayerImportState | null> {
    const playerImports = await this.dbContext.find(PlayerImportState, {
      order: {
        dateImported: "DESC",
      },
    });

    return playerImports.length > 0 ? playerImports[0] : null;
  }
}
