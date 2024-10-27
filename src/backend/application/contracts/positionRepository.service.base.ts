import { Position } from "../../domain/entities";

export interface PositionRepositoryServiceBase {
  getPositions: () => Promise<Position[]>;
}
