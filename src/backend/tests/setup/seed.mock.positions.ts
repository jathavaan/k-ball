import { DataSource } from "typeorm";
import { Position } from "../../domain/entities";

export const seedDummyPositions = async (
  dataSource: DataSource,
): Promise<void> => {
  const positionRepository = dataSource.getRepository(Position);

  await positionRepository.save([
    {
      id: 1,
      name: "Goalkeeper",
    },
    {
      id: 2,
      name: "Defender",
    },
    {
      id: 3,
      name: "Midfielder",
    },
    {
      id: 4,
      name: "Forward",
    },
  ]);
};
