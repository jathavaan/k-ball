import { Request } from "@application/common/request";
import { GetClubsQuery } from "@application/features/club/query/get-clubs-query/getClubsQuery";
import { ClubVm } from "@application/view-models";
import { ClubRepositoryServiceBase } from "@application/contracts/clubRepository.service.base";
import { container } from "@infrastructure/services/inversify.config";

export class GetClubsQueryHandler implements Request<GetClubsQuery, ClubVm[]> {
  clubRepositoryService = container.get<ClubRepositoryServiceBase>(
    "ClubRepositoryServiceBase",
  );

  async handle(request: GetClubsQuery): Promise<ClubVm[]> {
    const clubs = await this.clubRepositoryService.getClubs();
    return clubs.map((club) => new ClubVm(club));
  }
}
