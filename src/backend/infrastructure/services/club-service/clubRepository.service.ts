import { injectable } from "inversify";
import { ClubRepositoryServiceBase } from "../../../application/contracts";
import { KBallDbContext } from "../../persistence/dataSource";
import { Club } from "../../../domain/entities";
import { ClubDto } from "../../../application/contracts/database-import-service/footballApi.dto";

@injectable()
export class ClubRepositoryService implements ClubRepositoryServiceBase {
  dbContext = KBallDbContext.manager;

  async getClubs() {
    return await this.dbContext.find(Club, {
      order: {
        name: "ASC",
      },
    });
  }

  async getClubByName(name: string) {
    return await this.dbContext.findOne(Club, {
      where: {
        name: name,
      },
    });
  }

  async addClubs(clubs: ClubDto[]) {
    if (clubs.length === 0) {
      console.error("Clubs to add was not provided");
      return false;
    }

    const existingClubs = await this.dbContext.find(Club, {
      where: clubs.map((club) => ({ name: club.name })),
    });

    clubs = clubs.filter(
      (club) =>
        !existingClubs.some(
          (existingClub) =>
            existingClub.name.toLowerCase() === club.name.toLowerCase()
        )
    );

    if (clubs.length === 0) {
      console.warn("No new clubs to add");
      return false;
    }

    const clubsToAdd = clubs.map((clubDto) => {
      const club = new Club();
      club.name = clubDto.name;
      club.code = clubDto.code;
      club.logoUrl = clubDto.logo;
      club.externalId = clubDto.id;
      return club;
    });

    await this.dbContext.save(Club, clubsToAdd);
    console.log(`Added ${clubsToAdd.length} clubs`);
    return true;
  }

  async getClubByExternalId(externalId: number) {
    return await this.dbContext.findOne(Club, {
      where: {
        externalId: externalId,
      },
    });
  }
}
