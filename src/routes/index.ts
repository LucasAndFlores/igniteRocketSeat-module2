import { Router } from "express";

import { CategoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", CategoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router };
