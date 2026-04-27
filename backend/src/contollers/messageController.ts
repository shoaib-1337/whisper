import type { Request, Response, NextFunction } from "express";
import type { AuthReq } from "../middleware/auth";
import { Message } from "../models/Message";
import { Chat } from "../models/Chat";

export async function getMessages(
  req: AuthReq,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId = req.userId;
    const { chatId } = req.params;
    const chat = Chat.findOne({ _id: chatId, participants: userId });
    if (!chat) {
      res.status(404).json({ message: "Chat not Found" });
      return;
    }
    const messages = await Message.find({ chat: chatId })
      .populate("sender", "name email avatar")
      .sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500);
    next(error);
  }
}
