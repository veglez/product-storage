import express from "express";
import type { Request, Response } from "express";
import UserService from "../services/auth";

const authRouter = express.Router();

authRouter.get("/", async (req: Request, res: Response, next) => {
  try {
    const users = await UserService.getAll();
  } catch (error) {
    next(error);
  }
});

export default authRouter;
