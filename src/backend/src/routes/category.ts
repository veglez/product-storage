import { Router } from 'express';
import CategoryService from '../services/category';

const categoryRouter = Router()

categoryRouter.get("/", async (req, res, next) => {
    try {
        const products = await CategoryService.getAll();
        res.json(products).end()
    } catch (error) {
        next(error)
    }
})

categoryRouter.get("/:id", async (req, res, next) => {
    try {
        const product = await CategoryService.getById(req.params.id)
        res.json(product).end()
    } catch (error) {
        next(error)
    }
 })

categoryRouter.post("/", async (req, res, next) => {
    try {
        const itemCreated = await CategoryService.create(req.body)
        res.json(itemCreated).end()
    } catch (error) {
        next(error)
    }
})

categoryRouter.patch('/:id', async (req, res, next) =>{
    try {
        const { id } = req.params
        const updatedItem = await CategoryService.updateById(id, req.body);
        res.json(updatedItem)
    } catch (error) {
        next(error)
    }
})


categoryRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const response = await CategoryService.deleteById(id)
        res.json(response).end()
    } catch (error) {
        next(error)
    }
})

export default categoryRouter;