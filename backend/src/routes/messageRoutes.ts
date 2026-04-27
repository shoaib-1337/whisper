import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getMessages } from "../contollers/messageController";

const router = Router();

router.get("/chat/:chatId", protectRoute, getMessages);

export default router;
