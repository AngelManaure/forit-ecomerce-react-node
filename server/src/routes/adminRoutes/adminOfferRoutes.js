import { Router } from "express";

import offer from "../../controllers/adminControllers/adminOfferControllers.js";

const router = Router();

router.get("/offers", offer.getAll);

router.get("/offers/:id", offer.getOne);

router.post("/create-offert", offer.create);

router.put("/offers/:id", offer.update);

router.delete("/offers/:id", offer.delete);

export default router;