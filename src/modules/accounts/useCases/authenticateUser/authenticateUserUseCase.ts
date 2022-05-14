import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("email or password incorrect", 403);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("email or password incorrect", 403);
    }

    const token = sign({}, "fe352ef27b57301eb43cfab42b158910", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}
