import products from "../database/products.database";
import FilterManager from "../utils/Filter.manager";
import { Product } from "../interfaces";

class ProductsService {
  async getProducts(
    search?: string | any,
    brand?: string | any
  ): Promise<Product[]> {
    try {
      const response = products.filter((product) => {
        const matchesBrand = !brand || product.brand.id === brand;

        const matchesSearch =
          !search ||
          FilterManager.searchTerm(product.name).includes(
            FilterManager.searchTerm(search)
          );

        return matchesBrand && matchesSearch;
      });

      return response;
    } catch (error) {
      throw new Error("Erro na busca dos produtos!");
    }
  }
}

export default new ProductsService();
