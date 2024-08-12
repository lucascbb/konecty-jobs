import api from '../../services/api';

const getBrands = async () => {
  try {
    const response = await api.get('/brand');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar marcas:', error);
    throw error;
  }
};

export default getBrands;