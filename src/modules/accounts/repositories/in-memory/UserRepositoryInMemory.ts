import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../IUsersRepository";

export class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create({
    driverLicense,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driverLicense,
      email,
      name,
      password,
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id) as User;
  }
}
