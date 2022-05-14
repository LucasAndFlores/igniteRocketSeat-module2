import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarUseCase } from "./ListAvailableCarsUseCase";

let listCarUseCase: ListAvailableCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarUseCase = new ListAvailableCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carro1",
      category_id: "xxx",
      daily_rate: 100,
      description: "potencia",
      fine_amount: 15000,
      license_plate: "lpu5837",
      name: "teste",
    });
    const cars = await listCarUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carro2",
      category_id: "xxx",
      daily_rate: 100,
      description: "potencia",
      fine_amount: 15000,
      license_plate: "lpu58354",
      name: "teste",
    });
    const cars = await listCarUseCase.execute({ name: "teste" });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carro3",
      category_id: "xxx1",
      daily_rate: 100,
      description: "potencia",
      fine_amount: 15000,
      license_plate: "lpu58354",
      name: "teste2",
    });

    const cars = await listCarUseCase.execute({ brand: "carro3" });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carro4",
      category_id: "xxx2",
      daily_rate: 100,
      description: "potencia",
      fine_amount: 15000,
      license_plate: "lpu58354",
      name: "teste3",
    });

    const cars = await listCarUseCase.execute({ category_id: "xxx2" });

    expect(cars).toEqual([car]);
  });
});
