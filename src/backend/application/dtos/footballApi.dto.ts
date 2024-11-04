interface Paging {
  current: number;
  total: number;
}

export interface FootballApiLeagueResponse {
  paging: Paging;
  response: LeagueResponse[];
}

interface LeagueResponse {
  country: CountryDto;
}

export interface CountryDto {
  name: string;
  code: string;
  flag: string;
}

export interface FootballApiClubsResponse {
  paging: Paging;
  response: ClubResponse[];
}

interface ClubResponse {
  team: ClubDto;
}

interface ClubDtoBase {
  id: number;
  name: string;
  logo: string;
}

export interface ClubDto extends ClubDtoBase {
  code: string;
  country: string;
}

export interface FootballApiPlayersResponse {
  paging: Paging;
  response: PlayerResponse[];
}

export interface PlayerResponse {
  player: PlayerDto;
  statistics: PlayerStatisticsDto[];
}

export interface PlayerDto {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  birth: PlayerBirthPlaceDto;
  nationality: string;
  height: string;
  weight: string;
  photo: string;
}

interface PlayerBirthPlaceDto {
  date: string;
  place: string;
  country: string;
}

export interface PlayerStatisticsDto {
  league: PlayerLeagueDto;
  team: ClubDtoBase;
  games: PlayerGamesDto;
  shots: PlayerShotsDto;
  goals: PlayerGoalsDto;
  passes: PlayerPassesDto;
  tackles: PlayerTacklesDto;
  duels: PlayerDuelsDto;
  dribbles: PlayerDribblesDto;
  fouls: PlayerFoulsDto;
  cards: PlayerCardsDto;
  penalty: PlayerPenaltyDto;
}

interface PlayerLeagueDto {
  season: number;
}

interface PlayerGamesDto {
  appearances: number;
  lineups: number;
  minutes: number;
  position: string;
  rating: string;
}

interface PlayerShotsDto {
  total: number;
  on: number;
}

interface PlayerGoalsDto {
  total: number;
  conceded: number;
  assists: number;
  saves?: number;
}

interface PlayerPassesDto {
  total: number;
  key: number;
}

interface PlayerTacklesDto {
  total: number;
  blocks: number;
  interceptions: number;
}

interface PlayerDribblesDto {
  attempts: number;
  success: number;
}

interface PlayerFoulsDto {
  drawn: number;
  committed: number;
}

interface PlayerCardsDto {
  yellow: number;
  yellowred: number;
  red: number;
}

interface PlayerDuelsDto {
  total: number;
  won: number;
}

interface PlayerPenaltyDto {
  scored: number;
  missed: number;
}
