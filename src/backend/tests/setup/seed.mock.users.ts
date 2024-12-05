import { DataSource } from "typeorm";
import { User } from "../../domain/entities";

export const seedDummyUsers = async (dataSource: DataSource): Promise<void> => {
  const userRepository = dataSource.getRepository(User);
  await userRepository.save([
    {
      id: 1,
      email: "ola.nordmann@email.com",
      password: "password1",
      firstName: "Ola",
      lastName: "Nordmann",
    },
    {
      id: 2,
      email: "kari.nordmann@email.com",
      password: "password2",
      firstName: "Kari",
      lastName: "Nordmann",
    },
  ]);
};
