import type { Request, Response } from "express";
import type { AuthReq } from "../middleware/auth";
import { User } from "../models/User";

export async function getMe(req: AuthReq, res: Response) {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    //next();
  }
}
