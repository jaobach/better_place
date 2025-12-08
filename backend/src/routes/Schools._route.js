import { Router } from "express";
import { School_controller } from "../controllers/Schools_controller.js";

const router = Router();

router.get("/", School_controller.list);
router.post("/", School_controller.create);

export default router;
