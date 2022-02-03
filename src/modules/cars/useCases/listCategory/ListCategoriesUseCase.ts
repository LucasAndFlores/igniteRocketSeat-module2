import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepo: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepo.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
