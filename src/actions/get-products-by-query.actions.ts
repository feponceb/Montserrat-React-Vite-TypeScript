import type { ProductProps, ResponseNameProps } from '../interfaces/products.interfaces';
import { mockProducts } from "../data/mockProducts";

export const getProductsByQuery = async (query: string): Promise<ResponseNameProps> => {
  // Simulamos delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const foundProduct = mockProducts.find(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (foundProduct) {
    return {
      ok: true,
      statusCode: 200,
      product: foundProduct
    };
  }

  // Si no encuentra, devolvemos error
  return {
    ok: false,
    statusCode: 404,
    product: {} as ProductProps
  };
}