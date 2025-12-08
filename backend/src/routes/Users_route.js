import { Router } from "express";
import { User_controller } from "../controllers/Users_controller.js";

const router = Router();

router.get("/", User_controller.list);
router.post("/", User_controller.create);

export default router;
