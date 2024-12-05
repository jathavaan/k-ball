import {
  GetCountriesQuery,
  GetCountriesQueryHandler,
} from "../../../application/features/country/query";
import { container } from "../../../infrastructure/services/inversify.config";

const getCountriesQueryHandler = container.get(GetCountriesQueryHandler);

export const countryResolver = {
  CountryQuery: {
    countries: async () =>
      await getCountriesQueryHandler.handle(new GetCountriesQuery()),
  },
};
