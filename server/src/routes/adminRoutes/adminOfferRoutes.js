import { Router } from "express";

import offer from "../../controllers/adminControllers/adminOfferControllers.js";
import { authRequired } from "../../middlewares/authMiddlewares.js";
import { adminRequired } from "../../middlewares/adminMiddlewares/adminAuth.js";

const router = Router();

router.get("/offers", authRequired, adminRequired, offer.getAll);

router.get("/offers/:id", authRequired, adminRequired, offer.getOne);

router.post("/create-offert", authRequired, adminRequired, offer.create);

router.put("/offers/:id", authRequired, adminRequired, offer.update);

router.delete("/offers/:id", authRequired, adminRequired, offer.delete);

export default router;