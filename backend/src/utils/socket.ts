import { Socket, Server as SocketServer } from "socket.io";

import { Server as HttpServer } from "http";
import { verifyToken } from "@clerk/express";
import { Message } from "../models/Message";
import { User } from "../models/User";
import { Chat } from "../models/Chat";

export const initializeSocket = (httpServer: HttpServer) => {};
