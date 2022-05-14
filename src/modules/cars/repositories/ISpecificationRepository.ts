import { Specifications } from "../infra/typeorm/entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specifications>;
  findByName(name: string): Promise<Specifications | undefined>;
  findAll(): Promise<Specifications[]>;
  findByIds(ids: string[]): Promise<Specifications[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };

// design by contract
