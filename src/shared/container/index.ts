import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { CarsImagesRepository } from "../../modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { ICarsImagesRepository } from "../../modules/cars/repositories/ICarsImageRepository";


container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>("CarsImagesRepository", CarsImagesRepository)
