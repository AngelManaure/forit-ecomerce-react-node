import { Router } from "express";

import adminCategories from "../../controllers/adminControllers/adminCategoriesControllers.js";
import { validateSchema } from "../../middlewares/validateSchema.js";
import { categorySchema } from "../../schemas/categorySchemas.js";
import { authRequired } from "../../middlewares/authMiddlewares.js";
import { adminRequired } from "../../middlewares/adminMiddlewares/adminAuth.js";

const router = Router();

router.get("/categories", authRequired, adminRequired, adminCategories.getAll);

router.get("/categories/:id", authRequired, adminRequired, adminCategories.getOne);

router.post("/categories", authRequired, adminRequired, validateSchema(categorySchema), adminCategories.create);

router.put("/categories/:id", authRequired, adminRequired, validateSchema(categorySchema), adminCategories.update);

router.delete("/categories/:id", authRequired, adminRequired, adminCategories.delete);

export default router;