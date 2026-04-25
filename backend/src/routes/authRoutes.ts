import { Router } from "express";
import { getMe } from "../contollers/authController";
import { protectRoute } from "../middleware/auth";

const router = Router();

router.get("/me", protectRoute, getMe);

export default router;
