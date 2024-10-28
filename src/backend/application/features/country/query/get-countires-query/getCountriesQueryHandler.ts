import { Request } from "../../../../common/request";
import { GetCountriesQuery } from "./getCountriesQuery";
import { CountryVm } from "../../../../view-models";
import { container } from "../../../../../infrastructure/services/inversify.config";
import { CountryRepositoryServiceBase } from "../../../../contracts";

export class GetCountriesQueryHandler
  implements Request<GetCountriesQuery, CountryVm[]>
{
  countryRepositoryService = container.get<CountryRepositoryServiceBase>(
    "CountryRepositoryServiceBase",
  );

  async handle(request: GetCountriesQuery): Promise<CountryVm[]> {
    const countries = await this.countryRepositoryService.getCountries();
    return countries.map((country) => new CountryVm(country));
  }
}
