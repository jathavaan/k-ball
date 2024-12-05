import { Request } from "../../../../common";
import { GetCountriesQuery } from "./getCountriesQuery";
import { CountryVm } from "../../../../view-models";
import { CountryRepositoryServiceBase } from "../../../../contracts";
import { inject, injectable } from "inversify";

@injectable()
export class GetCountriesQueryHandler
  implements Request<GetCountriesQuery, CountryVm[]>
{
  constructor(
    @inject("CountryRepositoryServiceBase")
    private readonly countryRepositoryService: CountryRepositoryServiceBase,
  ) {}

  async handle(request: GetCountriesQuery): Promise<CountryVm[]> {
    const countries = await this.countryRepositoryService.getCountries();
    return countries.map((country) => new CountryVm(country));
  }
}
