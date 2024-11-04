﻿import {
  FootballApiClubsResponse,
  FootballApiLeagueResponse,
  FootballApiPlayersResponse,
} from "../dtos";

export interface FootballApiServiceBase {
  getLeague: () => Promise<FootballApiLeagueResponse>;
  getClubs: (seasonStartYear: number) => Promise<FootballApiClubsResponse>;
  getPlayers: (seasonStartYear: number) => Promise<FootballApiPlayersResponse>;
}
