import {
  BirthPlaceRepositoryServiceBase,
  ClubRepositoryServiceBase,
  CountryRepositoryServiceBase,
  PlayerRepositoryServiceBase,
  PlayerStatisticsRepositoryServiceBase,
  PositionRepositoryServiceBase,
  SeasonRepositoryServiceBase,
} from "../../../application/contracts";
import { Player, PlayerSeason } from "../../../domain/entities";
import { inject, injectable } from "inversify";
import { EntityManager, ILike, In } from "typeorm";
import { PlayerResponse } from "../../../application/contracts/database-import-service/footballApi.dto";

@injectable()
export class PlayerRepositoryService implements PlayerRepositoryServiceBase {
  constructor(
    @inject("EntityManager") private readonly dbContext: EntityManager,
    @inject("ClubRepositoryServiceBase")
    private readonly clubRepositoryService: ClubRepositoryServiceBase,
    @inject("BirthPlaceRepositoryServiceBase")
    private readonly birthPlaceRepositoryService: BirthPlaceRepositoryServiceBase,
    @inject("CountryRepositoryServiceBase")
    private readonly countryRepositoryService: CountryRepositoryServiceBase,
    @inject("PositionRepositoryServiceBase")
    private readonly positionRepositoryService: PositionRepositoryServiceBase,
    @inject("SeasonRepositoryServiceBase")
    private readonly seasonRepositoryService: SeasonRepositoryServiceBase,
    @inject("PlayerStatisticsRepositoryServiceBase")
    private readonly playerStatisticsRepositoryService: PlayerStatisticsRepositoryServiceBase,
  ) {}

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
        currentClub: true,
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
      await this.birthPlaceRepositoryService.getBirthPlaceAddIfMissing(
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

    player.fullName = playerDto.name;
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

  async generateAllPlayerSeasons(): Promise<boolean> {
    const POSSIBLE_SEASONS = [2024, 2023, 2022, 2021, 2020, 2019, 2018];

    const dbPlayers = await this.dbContext.find(Player, {
      relations: {
        currentClub: true,
      },
    });

    let allSuccessful = true;

    for (const player of dbPlayers) {
      const randomSeasonCount =
        Math.floor(Math.random() * POSSIBLE_SEASONS.length) + 1;

      const selectedSeasons = POSSIBLE_SEASONS.slice(0, randomSeasonCount);

      const success = await this.generatePlayerSeasons(player, selectedSeasons);

      if (!success) {
        allSuccessful = false;
      }
    }

    return allSuccessful;
  }

  private async generatePlayerSeasons(
    player: Player,
    seasonYears: number[],
  ): Promise<boolean> {
    try {
      for (const seasonYear of seasonYears) {
        const season =
          (await this.seasonRepositoryService.getSeason(seasonYear)) ||
          (await this.seasonRepositoryService.insertSeason(seasonYear));

        const existingPlayerSeason = await this.dbContext.findOne(
          PlayerSeason,
          {
            where: {
              player: { id: player.id },
              club: { id: player.currentClub.id },
              season: { id: season.id },
            },
          },
        );

        if (existingPlayerSeason) {
          console.log(
            `PlayerSeason already exists for playerId ${player.id}, clubId ${player.currentClub.id}, seasonId ${season.id}`,
          );
          continue;
        }

        const playerSeason = new PlayerSeason();
        playerSeason.player = player;
        playerSeason.club = player.currentClub;
        playerSeason.season = season;

        await this.dbContext.save(PlayerSeason, playerSeason);

        try {
          await this.playerStatisticsRepositoryService.generatePlayerStatistics(
            playerSeason,
          );
        } catch (statsError) {
          console.error(
            `Failed to generate statistics for playerSeasonId ${playerSeason.id}:`,
            statsError,
          );
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error("Failed to generate player seasons:", error);
      return false;
    }
  }

  async getPlayers(
    limit: number,
    offset: number,
    filters: {
      search?: string;
      clubIds?: number[];
      countryIds?: number[];
      positionIds?: number[];
      sortBy?: string;
      sortOrder?: string;
    },
  ): Promise<{ playerCards: Player[]; totalPlayers: number }> {
    const whereConditions: any = {};

    if (filters.clubIds && filters.clubIds.length > 0) {
      whereConditions.currentClub = { id: In(filters.clubIds) };
    }
    if (filters.countryIds && filters.countryIds.length > 0) {
      whereConditions.country = { id: In(filters.countryIds) };
    }
    if (filters.positionIds && filters.positionIds.length > 0) {
      whereConditions.position = { id: In(filters.positionIds) };
    }
    if (filters.search && filters.search.trim() !== "") {
      whereConditions.fullName = ILike(`%${filters.search}%`);
    }

    const totalPlayers = await this.dbContext.count(Player, {
      where: whereConditions,
      relations: {
        currentClub: true,
        country: true,
        position: true,
      },
    });

    const sortField = filters.sortBy || "fullName";
    const sortOrder = filters.sortOrder || "ASC";

    const playerCards = await this.dbContext.find(Player, {
      where: whereConditions,
      relations: {
        currentClub: true,
        country: true,
        position: true,
        playerReviews: true,
      },
      skip: offset,
      take: limit,
      order: {
        [sortField]: sortOrder,
      },
      select: {
        id: true,
        fullName: true,
        position: {
          id: true,
          name: true,
        },
        imageUrl: true,
        birthDate: true,
        currentClub: {
          id: true,
          name: true,
          logoUrl: true,
        },
        country: {
          id: true,
          name: true,
        },
        playerReviews: {
          attack: true,
          defence: true,
          passing: true,
          intelligence: true,
        },
      },
    });

    return { playerCards, totalPlayers };
  }
}
