import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@errors/AppError";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    driverLicense,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists", 409);
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      driverLicense,
      email,
      name,
      password: passwordHash,
    });
  }
}
