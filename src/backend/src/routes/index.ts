import { Router } from "express";
import type { Express, Request, Response } from "express";
import authRouter from "./auth";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const DefineRoutes = (app: Express) => {
  app.use("/api/v1", router);
  router.use("/auth", authRouter);
};

export default DefineRoutes;
