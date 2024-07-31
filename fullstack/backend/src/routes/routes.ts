import { Router, Request, Response } from 'express';

import ProductsRoutes from "./Products.routes";
import BrandsRoutes from "./Brands.routes";

const routes = Router();

routes.use("/product", ProductsRoutes);
routes.use("/brand", BrandsRoutes);


routes.get('/', (req: Request, res: Response) => {
  res.send('API ok!');
});

export default routes;
