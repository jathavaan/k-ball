import { Request } from "../../../../common";
import { GetClubsQuery } from "./getClubsQuery";
import { ClubVm } from "../../../../view-models";
import { ClubRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class GetClubsQueryHandler implements Request<GetClubsQuery, ClubVm[]> {
  constructor(
    @inject("ClubRepositoryServiceBase")
    private readonly clubRepositoryService: ClubRepositoryServiceBase,
  ) {}

  async handle(request: GetClubsQuery): Promise<ClubVm[]> {
    const clubs = await this.clubRepositoryService.getClubs();
    return clubs.map((club) => new ClubVm(club));
  }
}
