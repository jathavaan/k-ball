import { Request } from "../../../../common";
import { GetPositionsQuery } from "./getPositionsQuery";
import { PositionVm } from "../../../../view-models/positionVm";
import { PositionRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class GetPositionsQueryHandler
  implements Request<GetPositionsQuery, PositionVm[]>
{
  constructor(
    @inject("PositionRepositoryServiceBase")
    private readonly positionRepositoryService: PositionRepositoryServiceBase,
  ) {}

  async handle(request: GetPositionsQuery): Promise<PositionVm[]> {
    const positions = await this.positionRepositoryService.getPositions();
    return positions.map((position) => new PositionVm(position));
  }
}
