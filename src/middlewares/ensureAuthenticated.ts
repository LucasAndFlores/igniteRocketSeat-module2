import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "fe352ef27b57301eb43cfab42b158910"
    ) as IPayload;
    const userRepository = new UserRepository();

    const user = await userRepository.findById(userId);

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    request.user = {
      id: userId,
    };

    next();
  } catch (error) {
    throw new AppError("invalid token", 401);
  }
}
