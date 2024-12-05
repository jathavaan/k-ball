import { DataSource } from "typeorm";
import {
  BirthPlace,
  Club,
  Country,
  Player,
  Position,
} from "../../domain/entities";

export const seedDummyPlayers = async (
  dataSource: DataSource,
): Promise<void> => {
  const playerRepository = dataSource.getRepository(Player);
  const birthPlaceRepository = dataSource.getRepository(BirthPlace);
  const clubRepository = dataSource.getRepository(Club);
  const countryRepository = dataSource.getRepository(Country);
  const positionRepository = dataSource.getRepository(Position);

  // Retrieve related entities
  const seoul = await birthPlaceRepository.findOneBy({ name: "Seoul" });
  const busan = await birthPlaceRepository.findOneBy({ name: "Busan" });
  const rioDeJaneiro = await birthPlaceRepository.findOneBy({
    name: "Rio de Janeiro",
  });

  const fcSeoul = await clubRepository.findOneBy({ name: "FC Seoul" });
  const ulsanHyundai = await clubRepository.findOneBy({
    name: "Ulsan Hyundai",
  });

  const korea = await countryRepository.findOneBy({ name: "Korea Republic" });
  const brazil = await countryRepository.findOneBy({ name: "Brazil" });

  const forward = await positionRepository.findOneBy({ name: "Forward" });
  const defender = await positionRepository.findOneBy({ name: "Defender" });

  if (
    !seoul ||
    !busan ||
    !rioDeJaneiro ||
    !fcSeoul ||
    !ulsanHyundai ||
    !korea ||
    !brazil ||
    !forward ||
    !defender
  ) {
    throw new Error("Required related entities not found in the database.");
  }

  // Seed players
  await playerRepository.save([
    {
      fullName: "Son Heung-Min",
      firstName: "Heung-Min",
      lastName: "Son",
      imageUrl: "https://example.com/players/son-heung-min.jpg",
      birthDate: new Date("1992-07-08"),
      height: 183,
      weight: 77,
      externalId: 1001,
      birthPlace: seoul,
      currentClub: fcSeoul,
      country: korea,
      position: forward,
    },
    {
      fullName: "Kim Min-Jae",
      firstName: "Min-Jae",
      lastName: "Kim",
      imageUrl: "https://example.com/players/kim-min-jae.jpg",
      birthDate: new Date("1996-11-15"),
      height: 190,
      weight: 88,
      externalId: 1002,
      birthPlace: busan,
      currentClub: ulsanHyundai,
      country: korea,
      position: defender,
    },
    {
      fullName: "Richarlison",
      firstName: "Richarlison",
      lastName: "",
      imageUrl: "https://example.com/players/richarlison.jpg",
      birthDate: new Date("1997-05-10"),
      height: 177,
      weight: 71,
      externalId: 1003,
      birthPlace: rioDeJaneiro,
      currentClub: fcSeoul,
      country: brazil,
      position: forward,
    },
  ]);
};
