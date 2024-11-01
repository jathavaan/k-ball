import { injectable } from "inversify";
import { SeasonRepositoryServiceBase } from "../../../application/contracts";
import { Season } from "domain/entities";
import { KBallDbContext } from "../../persistence/dataSource";

@injectable()
export class SeasonRepositoryService implements SeasonRepositoryServiceBase {
  dbContext = KBallDbContext.manager;

  async insertSeason(seasonYear: number): Promise<Season> {
    const season = new Season();
    await this.dbContext.save(season);
    return (await this.getSeason(seasonYear))!;
  }

  async getSeason(seasonYear: number): Promise<Season | null> {
    return await this.dbContext.findOne(Season, {
      where: {
        year: seasonYear,
      },
    });
  }
}
