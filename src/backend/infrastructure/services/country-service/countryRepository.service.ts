import { injectable } from "inversify";
import { CountryRepositoryServiceBase } from "../../../application/contracts";
import { KBallDbContext } from "../../persistence/dataSource";
import { Country } from "../../../domain/entities";

@injectable()
export class CountryRepositoryService implements CountryRepositoryServiceBase {
  dbContext = KBallDbContext.manager;

  async getCountries() {
    return await this.dbContext.find(Country);
  }

  async getCountryByName(name: string) {
    return await this.dbContext.findOne(Country, {
      where: {
        name: name,
      },
    });
  }

  async addCountries(countries: Country[]) {
    if (countries.length === 0) {
      return false;
    }

    const existingCountries = await this.dbContext.find(Country, {
      where: countries.map((country) => ({ name: country.name })),
    });

    countries = countries.filter(
      (country) =>
        !existingCountries.some(
          (existingCountry) =>
            existingCountry.name.toLowerCase() === country.name.toLowerCase(),
        ),
    );

    if (countries.length === 0) {
      return false;
    }

    await this.dbContext.save(Country, countries);
    return true;
  }
}
