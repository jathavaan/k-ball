import { DataSource } from "typeorm";
import { Season } from "../../domain/entities";

export const seedDummySeasons = async (
  dataSource: DataSource,
): Promise<void> => {
  const seasonRepository = dataSource.getRepository(Season);

  await seasonRepository.save([
    {
      id: 1,
      year: 2023,
    },
    {
      id: 2,
      year: 2024,
    },
  ]);
};
