import { User } from "@domain/entities/user";

export interface UserRepositoryServiceBase {
  getUserById: (id: number) => Promise<User | null>;
  getUserByEmail: (email: string) => Promise<User | null>;
  getUsers: () => Promise<User[]>;
  addUser: (user: User) => Promise<boolean>;
  deleteUserById: (id: number) => Promise<boolean>;
}
