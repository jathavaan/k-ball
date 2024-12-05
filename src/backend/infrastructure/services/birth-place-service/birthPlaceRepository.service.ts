import {
  BirthPlaceRepositoryServiceBase,
  CountryRepositoryServiceBase,
} from "../../../application/contracts";
import { BirthPlace } from "../../../domain/entities";
import { inject, injectable } from "inversify";
import { EntityManager } from "typeorm";

@injectable()
export class BirthPlaceRepositoryService
  implements BirthPlaceRepositoryServiceBase
{
  constructor(
    @inject("EntityManager") private readonly dbContext: EntityManager,
    @inject("CountryRepositoryServiceBase")
    private readonly countryRepositoryService: CountryRepositoryServiceBase,
  ) {}

  async getBirthPlaceByNameAndCountry(
    birthPlaceName: string,
    countryName: string,
  ): Promise<BirthPlace | null> {
    return await this.dbContext.findOne(BirthPlace, {
      relations: {
        country: true,
      },
      where: {
        name: birthPlaceName,
        country: {
          name: countryName,
        },
      },
    });
  }

  async getBirthPlaceAddIfMissing(
    birthPlaceName: string,
    countryName: string,
  ): Promise<BirthPlace> {
    const existingBirthPlace = await this.getBirthPlaceByNameAndCountry(
      birthPlaceName,
      countryName,
    );

    if (existingBirthPlace !== null) {
      return existingBirthPlace;
    }

    const country =
      await this.countryRepositoryService.getCountryAddIfMissing(countryName);

    const newBirthPlace = new BirthPlace();
    newBirthPlace.name = birthPlaceName;
    newBirthPlace.country = country;

    await this.dbContext.save(BirthPlace, newBirthPlace);
    return (await this.getBirthPlaceByNameAndCountry(
      birthPlaceName,
      country.name,
    ))!;
  }
}
