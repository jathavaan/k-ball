import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import { User } from "../../../domain/entities";
import { UserRepositoryServiceBase } from "../../../application/contracts";
import bcrypt from "bcrypt";

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
      where: {
        email: email,
      },
    });
  }

  async getUsers() {
    return await this.dbContext.find(User);
  }

  async checkCredentials(email: string, password: string) {
    const user = await this.getUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    return user.id;
  }

  async addUser(user: User) {
    if (await this.getUserByEmail(user.email)) {
      return false;
    }

    user.password = await bcrypt.hash(user.password, 10);
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
