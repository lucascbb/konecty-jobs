import { Request, Response } from "express";
import ProductService from "../services/Brands.services";

class BrandsController {
  async getBrands(_req: Request, res: Response) {
    try {
      const response = await ProductService.getBrands();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).send({ error: "Erro ao buscar produtos" });
    }
  }
}

export default new BrandsController();
