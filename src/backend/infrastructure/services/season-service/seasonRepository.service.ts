import { injectable } from "inversify";
import { SeasonRepositoryServiceBase } from "../../../application/contracts";
import { KBallDbContext } from "../../persistence/dataSource";
import { Season } from "../../../domain/entities";

@injectable()
export class SeasonRepositoryService implements SeasonRepositoryServiceBase {
  dbContext = KBallDbContext.manager;

  async insertSeason(seasonYear: number): Promise<Season> {
    const season = new Season();
    season.year = seasonYear;
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
