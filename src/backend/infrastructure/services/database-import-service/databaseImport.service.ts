import {
  ClubRepositoryServiceBase,
  DatabaseImportServiceBase,
  FootballApiServiceBase,
  PlayerRepositoryServiceBase,
} from "../../../application/contracts";
import { injectable } from "inversify";
import { container } from "../inversify.config";
import { config } from "../../../config";
import { ClubDto, PlayerResponse } from "../../../application/dtos";
import { KBallDbContext } from "../../persistence/dataSource";

@injectable()
export class DatabaseImportService implements DatabaseImportServiceBase {
  dbContext = KBallDbContext.manager;
  apiFootballService = container.get<FootballApiServiceBase>(
    "FootballApiServiceBase",
  );

  clubRepositoryService = container.get<ClubRepositoryServiceBase>(
    "ClubRepositoryServiceBase",
  );

  playerRepositoryService = container.get<PlayerRepositoryServiceBase>(
    "PlayerRepositoryServiceBase",
  );

  async populateDatabase(): Promise<boolean> {
    const isClubsInserted = await this.insertClubs();
    const isCountriesInserted = await this.insertCountries();
    const isPlayersInserted = await this.insertPlayers();

    return isClubsInserted && isCountriesInserted && isPlayersInserted;
  }

  async insertClubs(): Promise<boolean> {
    const clubs = await this.convertApiClubsToClubDtos();
    return await this.clubRepositoryService.addClubs(clubs);
  }

  async insertPlayers(): Promise<boolean> {
    const playerResponses = await this.convertApiPlayersToPlayerResponses();

    let playerImportFailed = false;
    try {
      for (const playerResponse of playerResponses) {
        const playerIsAddedSuccessfully =
          await this.playerRepositoryService.upsertPlayer(playerResponse);

        if (playerIsAddedSuccessfully === null) {
          continue;
        }

        if (!playerIsAddedSuccessfully) {
          console.error(
            `Failed to add the following player ${playerResponse.player.firstName} ${playerResponse.player.lastname} (ID: ${playerResponse.player.id})`,
          );
          playerImportFailed = true;
        }
      }
    } catch (error: any) {
      playerImportFailed = true;
      console.error("Unhandled error:", error.message);
    }

    return !playerImportFailed;
  }

  async insertCountries(): Promise<boolean> {
    return true;
  }

  private async convertApiClubsToClubDtos(): Promise<ClubDto[]> {
    const uniqueClubs: ClubDto[] = [];
    for (const season of config.SEASONS_TO_IMPORT) {
      const clubs = await this.apiFootballService.getClubs(season);
      for (const club of clubs.response) {
        if (!uniqueClubs.find((c) => c.id === club.team.id)) {
          uniqueClubs.push(club.team);
        }
      }
    }

    return uniqueClubs;
  }

  private async convertApiPlayersToPlayerResponses(): Promise<
    PlayerResponse[]
  > {
    const players: PlayerResponse[] = [];
    for (const season of config.SEASONS_TO_IMPORT) {
      const playersResponse = await this.apiFootballService.getPlayers(season);
      players.push(...playersResponse.response);
    }

    return players;
  }
}
