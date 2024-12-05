import { DataSource } from "typeorm";
import { Club } from "../../domain/entities";

export const seedDummyClubs = async (dataSource: DataSource): Promise<void> => {
  const clubRepository = dataSource.getRepository(Club);

  await clubRepository.save([
    {
      id: 1,
      name: "FC Seoul",
      code: "FCS",
      logoUrl: "https://example.com/logos/fc-seoul.png",
      externalId: 101,
    },
    {
      id: 2,
      name: "Ulsan Hyundai",
      code: "UH",
      logoUrl: "https://example.com/logos/ulsan-hyundai.png",
      externalId: 102,
    },
    {
      id: 3,
      name: "Jeonbuk Hyundai Motors",
      code: "JHM",
      logoUrl: "https://example.com/logos/jeonbuk-hyundai-motors.png",
      externalId: 103,
    },
    {
      id: 4,
      name: "Pohang Steelers",
      code: "PS",
      logoUrl: "https://example.com/logos/pohang-steelers.png",
      externalId: 104,
    },
  ]);
};
