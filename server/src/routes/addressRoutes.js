import { Router } from "express";

import address from "../controllers/addressControllers.js";
import { authRequired } from "../middlewares/authMiddlewares.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { addressSchema } from "../schemas/addressSchemas.js";

const router = Router();

router.get("/get-address", authRequired, address.getAll);

router.get("/get-address/:id", authRequired, address.getOne);

router.post("/add-address", authRequired, validateSchema(addressSchema), address.create);

router.put("/get-address/:id", authRequired, validateSchema(addressSchema), address.update);

router.delete("/get-address/:id", authRequired, address.delete);

export default router;