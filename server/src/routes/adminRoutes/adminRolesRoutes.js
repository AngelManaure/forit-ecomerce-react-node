import { Router } from "express";

import roles from "../../controllers/adminControllers/adminRolesControllers.js";
import { authRequired } from "../../middlewares/authMiddlewares.js";
import { adminRequired } from "../../middlewares/adminMiddlewares/adminAuth.js";

const router = Router();

router.get("/user-roles", authRequired, adminRequired, roles.getAll);

router.get("/user-roles/:id", authRequired, adminRequired, roles.getOne);

router.post("/add-role", authRequired, adminRequired, roles.create);

router.delete("/delete-role", authRequired, adminRequired, roles.delete);

router.get("/verify-admin", authRequired, adminRequired, roles.verify);

export default router;