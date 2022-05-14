import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";

import { CategoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./users.routes";
import { carsRoutes } from "./cars.routes";

const router = Router();

router.use("/categories", CategoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", userRoutes);
router.use("/cars", carsRoutes);
router.use(authenticateRoutes);

export { router };
