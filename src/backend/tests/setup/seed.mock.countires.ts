import { DataSource } from "typeorm";
import { Country } from "../../domain/entities";

export const seedDummyCountries = async (
  dataSource: DataSource,
): Promise<void> => {
  const countryRepository = dataSource.getRepository(Country);
  await countryRepository.save([
    {
      id: 1,
      name: "Norway",
    },
    {
      id: 2,
      name: "Korea Republic",
    },
    {
      id: 3,
      name: "Brazil",
    },
  ]);
};
