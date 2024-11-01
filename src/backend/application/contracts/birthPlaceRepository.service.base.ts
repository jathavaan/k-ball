import { BirthPlace } from "../../domain/entities";

export interface BirthPlaceRepositoryServiceBase {
  getBirthPlaceByNameAndCountry(
    birthPlaceName: string,
    countryName: string,
  ): Promise<BirthPlace | null>;

  addAndOrGetBirthPlace(
    birthPlaceName: string,
    countryName: string,
  ): Promise<BirthPlace>;
}
