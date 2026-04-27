import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getChats, getOrCreateChat } from "../contollers/chatController";

const router = Router();

router.get("/", protectRoute, getChats);
router.get("/with/:participantId", protectRoute, getOrCreateChat);

export default router;
