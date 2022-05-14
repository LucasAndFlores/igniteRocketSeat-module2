import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./createCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "volkswagen",
      category_id: "2",
      daily_rate: 100,
      description: "carro teste",
      fine_amount: 1000,
      license_plate: "454545-gba",
      name: "golzinho teste",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car if the lincese plate already exists", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "volkswagen1",
        category_id: "2",
        daily_rate: 100,
        description: "carro teste",
        fine_amount: 1000,
        license_plate: "454545-gba",
        name: "golzinho teste",
      });
      await createCarUseCase.execute({
        brand: "volkswagen2",
        category_id: "2",
        daily_rate: 100,
        description: "carro teste",
        fine_amount: 1000,
        license_plate: "454545-gba",
        name: "golzinho teste",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car if the lincese plate already exists", async () => {
    const car = await createCarUseCase.execute({
      brand: "volkswagen123",
      category_id: "2",
      daily_rate: 100,
      description: "carro teste",
      fine_amount: 1000,
      license_plate: "47478-gba",
      name: "golzinho teste",
    });

    expect(car.available).toBe(true);
  });
});
