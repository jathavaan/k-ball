import { PlayerImportState } from "../../domain/entities";

export interface PlayerImportStateRepositoryServiceBase {
  addPlayerImportState(): Promise<void>;
  getPlayerImportState(): Promise<PlayerImportState | null>;
}
