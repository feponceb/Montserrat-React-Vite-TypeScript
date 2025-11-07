import type { ResponseProps } from "../interfaces/products.interfaces";
import { mockProducts } from "../data/mockProducts";

export const getProducts = async (): Promise<ResponseProps> => {
  // Simulamos un delay como si fuera una API real
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    ok: true,
    statusCode: 200,
    products: mockProducts
  };
}