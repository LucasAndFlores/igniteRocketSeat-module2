import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const existedSpecification = await this.specificationRepository.findByName(
      name
    );

    if (existedSpecification) {
      throw new AppError("Specification already exists", 409);
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
