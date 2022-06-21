import { Router } from "express";
import ProductServices from "../services/product";

const productRouter = Router();

productRouter.get("/", async (req, res, next) => {
  try {
    const products = await ProductServices.getAll();
    res.json(products).end();
  } catch (error) {
    next(error);
  }
});

productRouter.get("/:id", async (req, res, next) => {
  try {
    const product = await ProductServices.getById(req.params.id);
    res.json(product).end();
  } catch (error) {
    next(error);
  }
});

productRouter.post("/", async (req, res, next) => {
  try {
    const itemCreated = await ProductServices.create(req.body);
    res.json(itemCreated).end();
  } catch (error) {
    next(error);
  }
});

productRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedItem = await ProductServices.updateById(id, req.body);
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
});

productRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await ProductServices.deleteById(id);
    res.json(response).end();
  } catch (error) {
    next(error);
  }
});

export default productRouter;
