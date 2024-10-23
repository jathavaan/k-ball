import {
  GetCountriesQuery,
  GetCountriesQueryHandler,
} from "@application/features/country/query";

const getCountriesQueryHandler = new GetCountriesQueryHandler();

export const countryResolver = {
  CountryQuery: {
    countries: async () =>
      await getCountriesQueryHandler.handle(new GetCountriesQuery()),
  },
};
