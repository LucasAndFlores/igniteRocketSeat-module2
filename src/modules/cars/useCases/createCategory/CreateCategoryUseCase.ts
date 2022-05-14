import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const existedCategory = await this.categoriesRepository.findByName(name);

    if (existedCategory) {
      throw new AppError("Category already existed", 409);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
