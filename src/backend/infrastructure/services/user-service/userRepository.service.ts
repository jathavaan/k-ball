import { inject, injectable } from "inversify";
import { User } from "../../../domain/entities";
import { UserRepositoryServiceBase } from "../../../application/contracts";
import bcrypt from "bcrypt";
import { EntityManager } from "typeorm";

@injectable()
export class UserRepositoryService implements UserRepositoryServiceBase {
  constructor(
    @inject("EntityManager") private readonly dbContext: EntityManager,
  ) {}

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
        email: email.trim().toLowerCase(),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        password: true,
      },
    });
  }

  async getUsers() {
    return await this.dbContext.find(User, {
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });
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

    user.email = user.email.trim().toLowerCase();
    user.password = await bcrypt.hash(user.password, 10);

    await this.dbContext.save(User, user);
    return true;
  }

  async deleteUserById(id: number) {
    const user = await this.getUserById(id);
    if (!user) {
      return false;
    }

    await this.dbContext.remove(User, user);
    return true;
  }
}
