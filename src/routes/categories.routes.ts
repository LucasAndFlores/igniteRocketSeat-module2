import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategory/ListCategoriesController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/importCategoryController";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

CategoriesRoutes.post("/", createCategoryController.handle);

CategoriesRoutes.get("/", listCategoriesController.handle);

CategoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { CategoriesRoutes };
