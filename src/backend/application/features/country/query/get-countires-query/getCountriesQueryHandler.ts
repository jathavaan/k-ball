import { Request } from "@application/common/request";
import { CountryVm } from "@application/view-models";
import { container } from "@infrastructure/services/inversify.config";
import { CountryRepositoryServiceBase } from "@application/contracts/countryRepository.service.base";
import { GetCountriesQuery } from "@application/features/country/query/get-countires-query/getCountriesQuery";

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
