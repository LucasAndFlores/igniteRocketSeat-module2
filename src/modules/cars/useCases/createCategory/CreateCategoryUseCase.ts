import { ICreateCategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICreateCategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const existedCategory = this.categoriesRepository.findByName(name);

    if (existedCategory) {
      throw new Error("Category already existed");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
