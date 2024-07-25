import { Router } from "express";

import auth from "../controllers/authControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { registerSchema, loginSchema } from "../schemas/authSchemas.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), auth.register);

router.post("/login", validateSchema(loginSchema), auth.login);

router.post("/logout", auth.logout);

router.get("/verify-auth", auth.verify);

export default router;