import api from "../../services/api";

const getProducts = async (
  brand: string | undefined,
  search: string | undefined
) => {
  try {
    const response = await api.get("/product", {
      params: {
        search,
        brand
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

export default getProducts;