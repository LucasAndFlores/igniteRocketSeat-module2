import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/category";
import {
  ICreateCategoryDTO,
  ICategoryRepository,
} from "../../../repositories/ICategoryRepository";

class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const allCategories = await this.repository.find();
    return allCategories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const findCategory = await this.repository.findOne({ name });
    return findCategory;
  }
}

export { CategoriesRepository };
