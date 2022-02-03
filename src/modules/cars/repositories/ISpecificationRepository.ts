interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  findAll(): Specification[];
}

export { ISpecificationRepository, ICreateSpecificationDTO };

// design by contract
