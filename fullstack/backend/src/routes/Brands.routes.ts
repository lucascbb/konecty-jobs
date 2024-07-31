import { Router } from "express";
import BrandsController from "../controllers/Brands.Controller";

const routes = Router();

routes.get("/", BrandsController.getBrands);

export default routes;
