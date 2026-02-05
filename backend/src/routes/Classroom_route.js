import { Router } from "express";
import { Classroom_controller } from "../controllers/Classroom_controller.js";

const router = Router();

router.get("/", Classroom_controller.getAll);
router.post("/", Classroom_controller.create);

export default router;
