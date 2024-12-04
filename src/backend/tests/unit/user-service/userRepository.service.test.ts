import { DataSource } from "typeorm";
import { mockDatabase } from "../../mocks/mock.database";
import { UserRepositoryService } from "../../../infrastructure/services/user-service/userRepository.service";
import bcrypt from "bcrypt";

jest.mock("bcrypt", () => ({
  compare: jest.fn(),
}));

describe("UserRepositoryService with Mock Database", () => {
  let dataSource: DataSource;
  let userRepositoryService: UserRepositoryService;

  beforeEach(async () => {
    dataSource = await mockDatabase();
    userRepositoryService = new UserRepositoryService();
    userRepositoryService.dbContext = dataSource.manager;
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await dataSource.destroy();
  });

  it("should return a user by ID", async () => {
    const result = await userRepositoryService.getUserById(1);

    expect(result).toEqual({
      id: 1,
      email: "ola.nordmann@email.com",
      firstName: "Ola",
      lastName: "Nordmann",
    });
  });

  it("should return null if no user is found by ID", async () => {
    const result = await userRepositoryService.getUserById(999);
    expect(result).toBeNull();
  });

  it("should return a user by email", async () => {
    const result = await userRepositoryService.getUserByEmail(
      "kari.nordmann@email.com",
    );
    expect(result).toEqual({
      id: 2,
      email: "kari.nordmann@email.com",
      firstName: "Kari",
      lastName: "Nordmann",
    });
  });

  it("should return null if no user is found by email", async () => {
    const result =
      await userRepositoryService.getUserByEmail("unknown.email@com");
    expect(result).toBeNull();
  });

  it("should not authenticate user with wrong password", async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    const result = await userRepositoryService.checkCredentials(
      "kari.nordmann@email.com",
      "Wrong password",
    );

    expect(result).toBeNull();
  });

  it("should authenticate user with correct password", async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    const result = await userRepositoryService.checkCredentials(
      "kari.nordmann@email.com",
      "password2",
    );

    expect(result).toEqual(2);
  });

  it("should delete a user by ID", async () => {
    const result = await userRepositoryService.deleteUserById(1);
    expect(result).toBe(true);

    const user = await userRepositoryService.getUserById(1);
    expect(user).toBeNull();
  });
});
