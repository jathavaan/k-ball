import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import { User } from "../../../domain/entities";
import { UserRepositoryServiceBase } from "../../../application/contracts/userRepository.service";

@injectable()
export class UserRepositoryService implements UserRepositoryServiceBase {
  dbContext = KBallDbContext.manager;

  async getUserById(id: number) {
    return await this.dbContext.findOne(User, {
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
      where: {
        id: id,
      },
    });
  }

  async getUserByEmail(email: string) {
    return await this.dbContext.findOne(User, {
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
      where: {
        email: email,
      },
    });
  }

  async getUsers() {
    return await this.dbContext.find(User);
  }

  async addUser(user: User) {
    if (await this.getUserByEmail(user.email)) {
      return false;
    }

    await this.dbContext.save(User, user);
    return true;
  }

  async deleteUserById(id: any) {
    const user = await this.getUserById(id);
    if (!user) {
      return false;
    }

    await this.dbContext.remove(User, user);
    return true;
  }
}
