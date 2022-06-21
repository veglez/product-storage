import { Router } from "express";
import type { Express, Request, Response } from "express";
// import authRouter from "./auth";
import productRouter from './product';
import categoryRouter from './category';

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const DefineRoutes = (app: Express) => {
  app.use("/api/v1", router);
  // router.use("/auth", authRouter);
  router.use("/product", productRouter);
  router.use("/category", categoryRouter);
};

export default DefineRoutes;
