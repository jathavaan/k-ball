import { BirthPlace } from "../../domain/entities";

export interface BirthPlaceRepositoryServiceBase {
  getBirthPlaceByNameAndCountry(
    birthPlaceName: string,
    countryName: string,
  ): Promise<BirthPlace | null>;

  getBirthPlaceAddIfMissing(
    birthPlaceName: string,
    countryName: string,
  ): Promise<BirthPlace>;
}
