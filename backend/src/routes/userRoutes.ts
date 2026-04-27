import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getUsers } from "../contollers/userController";

const router = Router();

router.get("/", protectRoute, getUsers);

export default router;
