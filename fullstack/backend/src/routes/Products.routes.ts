import { Router } from 'express';
import ProductsController from '../controllers/Products.controller';

const routes = Router();

routes.get("/", ProductsController.getProducts);

export default routes;
