import { getRepository, Repository } from "typeorm";
import { Specifications } from "../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../../repositories/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = getRepository(Specifications);
  }

  async findByIds(ids: string[]): Promise<Specifications[]> {
    const specification = await this.repository.findByIds(ids);
    return specification;
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specifications> {
    const create = this.repository.create({
      name,
      description,
    });

    await this.repository.save(create);

    return create;
  }

  async findByName(name: string): Promise<Specifications | undefined> {
    const specification = await this.repository.findOne({
      name: name,
    });
    return specification;
  }

  async findAll(): Promise<Specifications[]> {
    const allSpecifications = await this.repository.find();
    return allSpecifications;
  }
}

export { SpecificationRepository };
