import { Category } from "../model/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepositories {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Category | undefined;
  list(): Category[];
}

export { ICreateCategoryDTO, ICategoryRepositories };
