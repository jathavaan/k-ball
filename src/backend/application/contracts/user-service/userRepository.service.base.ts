﻿import { User } from "../../../domain/entities";

export interface UserRepositoryServiceBase {
  getUserById: (id: number) => Promise<User | null>;
  getUserByEmail: (email: string) => Promise<User | null>;
  getUsers: () => Promise<User[]>;
  checkCredentials: (email: string, password: string) => Promise<number | null>;
  addUser: (user: User) => Promise<boolean>;
  deleteUserById: (id: number) => Promise<boolean>;
}
