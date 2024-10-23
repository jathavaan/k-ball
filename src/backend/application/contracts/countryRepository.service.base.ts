import { Country } from "@domain/entities";

export interface CountryRepositoryServiceBase {
  getCountries: () => Promise<Country[]>;
  getCountryByName: (name: string) => Promise<Country | null>;
  addCountries: (countries: Country[]) => Promise<boolean>;
}
