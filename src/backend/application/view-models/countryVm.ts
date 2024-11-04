import { Country } from "../../domain/entities";

export class CountryVm {
  id: number;
  name: string;
  flagUrl: string;

  constructor(country: Country) {
    this.id = country.id;
    this.name = country.name;
    this.flagUrl = country.flagUrl!;
  }
}
