import { Specifications } from "../../infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

export class SpecificationInMemory implements ISpecificationRepository {
  specifications: Specifications[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specifications> {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specifications | undefined> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  async findAll(): Promise<Specifications[]> {
    return this.specifications;
  }

  async findByIds(ids: string[]): Promise<Specifications[]> {
    const allSpecifications = this.specifications.filter((specification) => {
      return ids.includes(specification.id);
    });
    return allSpecifications;
  }
}
