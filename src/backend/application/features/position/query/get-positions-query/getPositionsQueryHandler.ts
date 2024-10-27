import { Request } from "../../../../common/request";
import { GetPositionsQuery } from "./getPositionsQuery";
import { PositionVm } from "../../../../view-models/positionVm";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { PositionRepositoryServiceBase } from "../../../../contracts";

export class GetPositionsQueryHandler
  implements Request<GetPositionsQuery, PositionVm[]>
{
  positionRepositoryService = container.get<PositionRepositoryServiceBase>(
    "PositionRepositoryServiceBase",
  );

  async handle(request: GetPositionsQuery): Promise<PositionVm[]> {
    const positions = await this.positionRepositoryService.getPositions();
    return positions.map((position) => new PositionVm(position));
  }
}
