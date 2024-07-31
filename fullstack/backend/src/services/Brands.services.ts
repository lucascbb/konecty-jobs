import brands from "../database/brands.database";
import { Brand } from "../interfaces";

class BrandsService {
  async getBrands(): Promise<Brand[]> {
    try {
      return brands;
    } catch (error) {
      throw new Error("Erro na busca dos produtos!");
    }
  }
}

export default new BrandsService();
