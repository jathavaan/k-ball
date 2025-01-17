﻿import { DataSource } from "typeorm";
import { BirthPlace, Country } from "../../domain/entities";

export const seedDummyBirthPlaces = async (
  dataSource: DataSource,
): Promise<void> => {
  const birthPlaceRepository = dataSource.getRepository(BirthPlace);
  const countryRepository = dataSource.getRepository(Country);

  const norway = await countryRepository.findOneBy({ name: "Norway" });
  const korea = await countryRepository.findOneBy({ name: "Korea Republic" });
  const brazil = await countryRepository.findOneBy({ name: "Brazil" });

  if (!norway || !korea || !brazil) {
    throw new Error("Required countries not found in the mock database.");
  }

  await birthPlaceRepository.save([
    {
      name: "Oslo",
      country: norway,
    },
    {
      name: "Trondheim",
      country: norway,
    },
    {
      name: "Seoul",
      country: korea,
    },
    {
      name: "Busan",
      country: korea,
    },
    {
      name: "Rio de Janeiro",
      country: brazil,
    },
  ]);
};
