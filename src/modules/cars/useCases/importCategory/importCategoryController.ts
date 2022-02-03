import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const allFile = file as Express.Multer.File;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    await importCategoryUseCase.execute(allFile);
    return response.send();
  }
}

export { ImportCategoryController };
