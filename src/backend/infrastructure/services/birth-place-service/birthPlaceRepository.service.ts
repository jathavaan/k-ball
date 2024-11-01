import {
  BirthPlaceRepositoryServiceBase,
  CountryRepositoryServiceBase,
} from "../../../application/contracts";
import { BirthPlace } from "../../../domain/entities";
import { KBallDbContext } from "../../persistence/dataSource";
import { container } from "../inversify.config";
import { injectable } from "inversify";

@injectable()
export class BirthPlaceRepositoryService
  implements BirthPlaceRepositoryServiceBase
{
  dbContext = KBallDbContext.manager;
  countryRepositoryService = container.get<CountryRepositoryServiceBase>(
    "CountryRepositoryServiceBase",
  );

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

  async addAndOrGetBirthPlace(
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
