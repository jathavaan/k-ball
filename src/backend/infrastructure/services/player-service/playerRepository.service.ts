import {
  BirthPlaceRepositoryServiceBase,
  ClubRepositoryServiceBase,
  CountryRepositoryServiceBase,
  PlayerRepositoryServiceBase,
  PositionRepositoryServiceBase,
  SeasonRepositoryServiceBase,
} from "../../../application/contracts";
import { Player, PlayerSeason } from "../../../domain/entities";
import { KBallDbContext } from "../../persistence/dataSource";
import { injectable } from "inversify";
import { PlayerResponse, PlayerStatisticsDto } from "../../../application/dtos";
import { container } from "../inversify.config";

@injectable()
export class PlayerRepositoryService implements PlayerRepositoryServiceBase {
  dbContext = KBallDbContext.manager;
  clubRepositoryService = container.get<ClubRepositoryServiceBase>(
    "ClubRepositoryServiceBase",
  );

  seasonRepositoryService = container.get<SeasonRepositoryServiceBase>(
    "SeasonRepositoryServiceBase",
  );

  birthPlaceRepositoryService = container.get<BirthPlaceRepositoryServiceBase>(
    "BirthPlaceRepositoryServiceBase",
  );

  countryRepositoryService = container.get<CountryRepositoryServiceBase>(
    "CountryRepositoryServiceBase",
  );

  positionRepositoryService = container.get<PositionRepositoryServiceBase>(
    "PositionRepositoryServiceBase",
  );

  async getPlayers(): Promise<Player[]> {
    return await this.dbContext.find(Player);
  }

  async getPlayerById(playerId: number): Promise<Player | null> {
    return await this.dbContext.findOne(Player, {
      where: {
        id: playerId,
      },
      relations: {
        playerSeasons: true,
        position: true,
        country: true,
        birthPlace: true,
      },
    });
  }

  async getPlayerByExternalId(externalId: number): Promise<Player | null> {
    return await this.dbContext.findOne(Player, {
      where: {
        externalId: externalId,
      },
      relations: {
        playerSeasons: true,
        position: true,
        country: true,
        birthPlace: true,
      },
    });
  }

  async upsertPlayer(playerResponse: PlayerResponse): Promise<boolean | null> {
    if (playerResponse.statistics.length === 0) {
      console.error(
        "Player statistics length was 0. This is an error from the Football API",
      );
    }

    if (playerResponse.statistics.length > 1) {
      console.warn(
        `Player statistics length is not 1. Was ${playerResponse.statistics.length} for ${playerResponse.player.firstname} ${playerResponse.player.lastname} (ID ${playerResponse.player.id})`,
      );
    }

    const playerDto = playerResponse.player;
    const playerStatisticsDto = playerResponse.statistics[0];

    const playerBirthPlace =
      await this.birthPlaceRepositoryService.addAndOrGetBirthPlace(
        playerDto.birth.place,
        playerDto.birth.country,
      );

    const playerCountry =
      await this.countryRepositoryService.getCountryAddIfMissing(
        playerDto.nationality,
      );

    const playerClub = await this.clubRepositoryService.getClubByExternalId(
      playerStatisticsDto.team.id,
    );

    if (playerClub === null) {
      console.warn(
        `Something was wrong with the data from Football API. Club with ID ${playerStatisticsDto.team.id} was not found in the database. Skipping player ${playerDto.firstname} ${playerDto.lastname} (External ID ${playerDto.id})`,
      );

      return null;
    }

    const playerPosition =
      await this.positionRepositoryService.getPositionAddIfMissing(
        playerStatisticsDto.games.position,
      );

    let player = await this.getPlayerByExternalId(playerDto.id);
    if (player === null) {
      player = new Player();
    }

    player.firstName = playerDto.firstname;
    player.lastName = playerDto.lastname;
    player.imageUrl = playerDto.photo;
    player.birthDate = new Date(Date.parse(playerDto.birth.date));
    player.height = playerDto.height
      ? parseFloat(playerDto.height.replace("cm", "").trim())
      : undefined;
    player.weight = playerDto.weight
      ? parseFloat(playerDto.weight.replace("kg", "").trim())
      : undefined;
    player.externalId = playerDto.id;

    player.currentClub = playerClub;
    player.birthPlace = playerBirthPlace;
    player.country = playerCountry;
    player.position = playerPosition;

    await this.dbContext.save(Player, player, { reload: true });
    return true;
  }

  private async createPlayerSeason(
    player: Player,
    playerStatistics: PlayerStatisticsDto,
  ): Promise<PlayerSeason> {
    const playerSeason = new PlayerSeason();
    playerSeason.player = player;
    playerSeason.club = player.currentClub;

    const season = await this.seasonRepositoryService.getSeason(
      playerStatistics.league.season,
    );

    if (season === null) {
      const season = await this.seasonRepositoryService.insertSeason(
        playerStatistics.league.season,
      );
    }

    playerSeason.season = season!;
    return playerSeason;
  }
}
