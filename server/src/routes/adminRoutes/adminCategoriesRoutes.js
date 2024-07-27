import { Router } from "express";

import adminCategories from "../../controllers/adminControllers/adminCategoriesControllers.js";
import { validateSchema } from "../../middlewares/validateSchema.js";
import { categorySchema } from "../../schemas/categorySchemas.js";

const router = Router();

router.get("/categories", adminCategories.getAll);

router.get("/categories/:id", adminCategories.getOne);

router.post("/categories", validateSchema(categorySchema), adminCategories.create);

router.put("/categories/:id", validateSchema(categorySchema), adminCategories.update);

router.delete("/categories/:id", adminCategories.delete);

export default router;