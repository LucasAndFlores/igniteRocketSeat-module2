import { Specifications } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specifications | undefined>;
  findAll(): Promise<Specifications[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };

// design by contract
