import { Router } from "express";
import { Student_controller } from "../controllers/Student_controller.js";

const router = Router();

router.get("/", Student_controller.list);
router.post("/", Student_controller.create);

export default router;
