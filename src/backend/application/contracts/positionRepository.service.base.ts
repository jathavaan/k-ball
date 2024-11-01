import { Position } from "../../domain/entities";

export interface PositionRepositoryServiceBase {
  getPositions: () => Promise<Position[]>;
  getPositionByName: (positionName: string) => Promise<Position | null>;
  getPositionAddIfMissing: (positionName: string) => Promise<Position>;
}
