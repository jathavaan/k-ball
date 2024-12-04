import { inject, injectable } from "inversify";
import { PlayerImportState } from "../../../domain/entities";
import { PlayerImportStateRepositoryServiceBase } from "../../../application/contracts";
import { EntityManager } from "typeorm";

@injectable()
export class PlayerImportStateRepositoryService
  implements PlayerImportStateRepositoryServiceBase
{
  constructor(
    @inject("EntityManager") private readonly dbContext: EntityManager,
  ) {}

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
