import { Router } from "express";

import adminProducts from "../../controllers/adminControllers/adminProductsController.js";
import { validateSchema } from "../../middlewares/validateSchema.js";
import { productSchema } from "../../schemas/productSchemas.js";
import upload from "../../libs/multerConfig.js";

const router = Router();

router.get("/products", adminProducts.getAll);

router.get("/products/:id", adminProducts.getOne);

router.post("/products", validateSchema(productSchema), upload.single('file'), adminProducts.create);

router.put("/products/:id", validateSchema(productSchema), adminProducts.update);

router.delete("/products/:id", adminProducts.delete);

router.get("/products/:categoryId", adminProducts.category);

export default router;