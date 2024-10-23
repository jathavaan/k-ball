import { injectable } from "inversify";
import { ClubRepositoryServiceBase } from "@application/contracts/clubRepository.service.base";
import { Club } from "@domain/entities";
import { KBallDbContext } from "@infrastructure/persistence/dataSource";

@injectable()
export class ClubRepositoryService implements ClubRepositoryServiceBase {
  dbContext = KBallDbContext.manager;

  async getClubs() {
    return await this.dbContext.find(Club);
  }

  async getClubByName(name: string) {
    return await this.dbContext.findOne(Club, {
      where: {
        name: name,
      },
    });
  }

  async addClubs(clubs: Club[]) {
    if (clubs.length === 0) {
      return false;
    }

    const existingClubs = await this.dbContext.find(Club, {
      where: clubs.map((club) => ({ name: club.name })),
    });

    clubs = clubs.filter(
      (club) =>
        !existingClubs.some(
          (existingClub) =>
            existingClub.name.toLowerCase() === club.name.toLowerCase(),
        ),
    );

    if (clubs.length === 0) {
      return false;
    }

    await this.dbContext.save(Club, clubs);
    return true;
  }
}
