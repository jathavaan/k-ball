import { FootballApiServiceBase } from "../../../application/contracts";

import axios from "axios";
import { config } from "../../../config";
import { injectable } from "inversify";
import {
  FootballApiClubsResponse,
  FootballApiLeagueResponse,
  FootballApiPlayersResponse,
  PlayerResponse,
} from "../../../application/contracts/database-import-service/footballApi.dto";

@injectable()
export class FootballApiService implements FootballApiServiceBase {
  apiClient = axios.create({
    baseURL: config.API_FOOTBALL_BASE_URL,
    headers: {
      "x-rapidapi-key": config.API_FOOTBALL_KEY,
    },
  });

  async getLeague(): Promise<FootballApiLeagueResponse> {
    const response = await this.apiClient.get<FootballApiLeagueResponse>(
      "/leagues",
      {
        params: {
          id: config.API_FOOTBALL_K_LEAGUE_ID,
        },
      },
    );

    return response.data;
  }

  async getClubs(seasonStartYear: number): Promise<FootballApiClubsResponse> {
    const response = await this.apiClient.get<FootballApiClubsResponse>(
      "/teams",
      {
        params: {
          league: config.API_FOOTBALL_K_LEAGUE_ID,
          season: seasonStartYear,
        },
      },
    );

    return response.data;
  }

  async getPlayers(
    seasonStartYear: number,
  ): Promise<FootballApiPlayersResponse> {
    const timeout = 75_000;
    let currentPage = 1;
    const response = await this.apiClient.get<FootballApiPlayersResponse>(
      "/players",
      {
        params: {
          league: config.API_FOOTBALL_K_LEAGUE_ID,
          season: seasonStartYear,
        },
      },
    );

    const result = response.data;
    const totalPages = result.paging.total;
    // const totalPages: number = 8;
    const playerResponses: PlayerResponse[] = [...result.response];

    console.log(`Fetching page ${currentPage}/${totalPages}`);
    while (currentPage < totalPages) {
      currentPage++;
      console.log(`Fetching page ${currentPage}/${totalPages} of player data`);
      const response = await this.apiClient.get<FootballApiPlayersResponse>(
        "/players",
        {
          params: {
            league: config.API_FOOTBALL_K_LEAGUE_ID,
            season: seasonStartYear,
            page: currentPage,
          },
        },
      );
      playerResponses.push(...response.data.response);

      if (currentPage % 10 == 0) {
        console.log(
          `-> Sleeping ${timeout} milliseconds to bypass rate-limit of football API`,
        );
        await new Promise((f) => setTimeout(f, timeout));
      }
    }

    await new Promise((f) => setTimeout(f, timeout));
    console.log(
      `-> Sleeping ${timeout} milliseconds to bypass rate-limit of football API`,
    );
    result.response = playerResponses;
    return result;
  }
}
