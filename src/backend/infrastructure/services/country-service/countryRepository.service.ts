﻿import { inject, injectable } from "inversify";
import { CountryRepositoryServiceBase } from "../../../application/contracts";
import { Country } from "../../../domain/entities";
import { EntityManager } from "typeorm";

@injectable()
export class CountryRepositoryService implements CountryRepositoryServiceBase {
  constructor(
    @inject("EntityManager") private readonly dbContext: EntityManager,
  ) {}

  async getCountries() {
    const countries = await this.dbContext.find(Country, {
      select: {
        id: true,
        name: true,
        flagUrl: true,
        players: true,
      },
      relations: {
        players: true,
      },
    });

    return countries
      .filter((country: Country) => country.players.length > 0)
      .sort((a, b) => b.players.length - a.players.length);
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

  async getCountryAddIfMissing(
    countryName: string,
    flagUrl?: string,
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
      },
    );
  }
}
