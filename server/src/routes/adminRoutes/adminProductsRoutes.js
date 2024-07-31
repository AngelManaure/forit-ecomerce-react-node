import { Router } from "express";

import adminProducts from "../../controllers/adminControllers/adminProductsController.js";
import { validateSchema } from "../../middlewares/validateSchema.js";
import { productSchema } from "../../schemas/productSchemas.js";
import upload from "../../libs/multerConfig.js";
import { authRequired } from "../../middlewares/authMiddlewares.js";
import { adminRequired } from "../../middlewares/adminMiddlewares/adminAuth.js";

const router = Router();

router.get("/products", authRequired, adminRequired, adminProducts.getAll);

router.get("/products/:id", authRequired, adminRequired, adminProducts.getOne);

router.post("/products", authRequired, adminRequired, validateSchema(productSchema), upload.single('file'), adminProducts.create);

router.put("/products/:id", authRequired, adminRequired, validateSchema(productSchema), adminProducts.update);

router.delete("/products/:id", authRequired, adminRequired, adminProducts.delete);

router.get("/products/:categoryId",  authRequired, adminRequired, adminProducts.category);

export default router;