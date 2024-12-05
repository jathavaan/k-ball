import { inject, injectable } from "inversify";
import { SeasonRepositoryServiceBase } from "../../../application/contracts";
import { Season } from "../../../domain/entities";
import { EntityManager } from "typeorm";

@injectable()
export class SeasonRepositoryService implements SeasonRepositoryServiceBase {
  constructor(
    @inject("EntityManager") private readonly dbContext: EntityManager,
  ) {}

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
