import { injectable } from "inversify";
import { CountryRepositoryServiceBase } from "../../../application/contracts";
import { KBallDbContext } from "../../persistence/dataSource";
import { Country, Player } from "../../../domain/entities";

@injectable()
export class CountryRepositoryService implements CountryRepositoryServiceBase {
  dbContext = KBallDbContext.manager;

  async getCountries() {
    const countries = await this.dbContext.query(`
      SELECT 
          country.id AS id,
          country.name AS name,
          country."flagUrl" AS "flagUrl",
          COUNT(player.id) AS "playerCount"
      FROM 
          country
      LEFT JOIN 
          player ON player."countryId" = country.id
      GROUP BY 
          country.id, country.name, country."flagUrl"
      HAVING 
          COUNT(player.id) > 0
      ORDER BY 
          "playerCount" DESC;
    `);
    return countries;
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
            existingCountry.name.toLowerCase() === country.name.toLowerCase()
        )
    );

    if (countries.length === 0) {
      return false;
    }

    await this.dbContext.save(Country, countries);
    return true;
  }

  async getCountryAddIfMissing(
    countryName: string,
    flagUrl?: string
  ): Promise<Country> {
    return await this.dbContext.transaction(
      async (transactionalEntityManager) => {
        const country = await transactionalEntityManager.findOne(Country, {
          where: {
            name: countryName,
          },
        });

        if (country) {
          return country;
        }

        const newCountry = new Country();
        newCountry.name = countryName;
        newCountry.flagUrl = flagUrl;

        await transactionalEntityManager.save(Country, newCountry);
        return newCountry;
      }
    );
  }
}
