import { Router } from 'express';

import products from '../controllers/productsControllers.js';
import { authRequired } from "../middlewares/authMiddlewares.js";
import { validateSchema } from '../middlewares/validateSchema.js';
import { productSchema } from "../schemas/productSchemas.js";
import upload from '../libs/multerConfig.js';

const router = Router();

router.get("/products", products.getAll);

router.get("/products/:id", products.getOne);

router.get("/products-categories", products.getCategories);

router.get('/products-categories/:categoryId', products.category);

router.post('/new-product', validateSchema(productSchema), upload.single('file'), products.create);

// router.post('/new-product/add-category', pro)

// authRequired,
// router.put("/products/:id", authRequired, validateSchema(productSchema), products.update);

router.delete("/products/:id", authRequired, products.delete);

export default router;