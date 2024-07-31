import { Request, Response } from "express";
import ProductService from "../services/Products.services";

class ProductsController {
  async getProducts(req: Request, res: Response) {
    try {
      const { search, brand } = req.query;
      const response = await ProductService.getProducts(search, brand);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).send({ error: "Erro ao buscar produtos" });
    }
  }
}

export default new ProductsController();
