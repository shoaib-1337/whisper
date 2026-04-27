import { Socket, Server as SocketServer } from "socket.io";

import { Server as HttpServer } from "http";
import { verifyToken } from "@clerk/express";
import { Message } from "../models/Message";
import { User } from "../models/User";
import { Chat } from "../models/Chat";

interface SocketWithUserId extends Socket {
  userId: string;
}

export const initializeSocket = (httpServer: HttpServer) => {
  const allowedOrigins = [
    "http://localhost:8081",
    "http://localhost:5173",
    process.env.FRONTEND_URL as string,
  ];
  const io = new SocketServer(httpServer, {
    cors: { origin: allowedOrigins },
  });

  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("Authentication error"));
    try {
      const session = await verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY,
      });
      const clerkId = session.sub;
      const user = await User.findOne({ clerkId });
      if (!user) return next(new Error("User not found"));
      (socket as SocketWithUserId).userId = user._id.toString();
      next();
    } catch (error) {
      next(new Error("Auth Error"));
    }
  });
};
