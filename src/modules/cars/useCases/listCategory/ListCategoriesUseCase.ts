import { Category } from "../../model/category";
import { ICategoryRepositories } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepo: ICategoryRepositories) {}

  execute(): Category[] {
    const categories = this.categoriesRepo.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
