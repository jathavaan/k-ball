import { Request } from "@application/common/request";
import { GetPositionsQuery } from "@application/features/position/query/get-positions-query/getPositionsQuery";
import { PositionVm } from "@application/view-models/positionVm";
import { PositionRepositoryServiceBase } from "@application/contracts";
import { container } from "@infrastructure/services/inversify.config";

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
