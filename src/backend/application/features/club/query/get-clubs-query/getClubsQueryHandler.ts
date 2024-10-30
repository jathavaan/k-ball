import { Request } from "../../../../common/request";
import { GetClubsQuery } from "./getClubsQuery";
import { ClubVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { ClubRepositoryServiceBase } from "../../../../contracts";

export class GetClubsQueryHandler implements Request<GetClubsQuery, ClubVm[]> {
  clubRepositoryService = container.get<ClubRepositoryServiceBase>(
    "ClubRepositoryServiceBase",
  );

  async handle(request: GetClubsQuery): Promise<ClubVm[]> {
    const clubs = await this.clubRepositoryService.getClubs();
    return clubs.map((club) => new ClubVm(club));
  }
}
