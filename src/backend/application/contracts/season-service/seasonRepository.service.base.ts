import { Season } from "../../../domain/entities";

export interface SeasonRepositoryServiceBase {
  insertSeason: (seasonYear: number) => Promise<Season>;
  getSeason: (seasonYear: number) => Promise<Season | null>;
}
