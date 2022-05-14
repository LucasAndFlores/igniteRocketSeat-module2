import { getRepository, Repository } from "typeorm";
import { ICarsImagesRepository } from "../../../repositories/ICarsImageRepository";
import { CarImage } from "../entities/CarImage";


export class CarsImagesRepository implements ICarsImagesRepository {

    private repository: Repository<CarImage>

    constructor() {
        this.repository = getRepository(CarImage)
    }

    async create(carId: string, imageName: string): Promise<CarImage> {
        const carImage = this.repository.create({
            car_id: carId, 
            image_name: imageName
        })

        await this.repository.save(carImage)

        return carImage
    }
    
}