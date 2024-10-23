import { Country } from "@domain/entities";

export class CountryVm {
  id: number;
  name: string;
  flag: string;

  constructor(country: Country) {
    this.id = country.id;
    this.name = country.name;
    this.flag = country.flag;
  }
}
