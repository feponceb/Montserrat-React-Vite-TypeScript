import type { ProductProps } from '../interfaces/products.interfaces';

export const mockProducts: ProductProps[] = [
  {
    id: 1,
    name: "Televisor Samsung 55\"",
    price: 899.99,
    category: "Electrónicos",
    image: "https://media.falabella.com/falabellaCL/17229748_1/w=800,h=800,fit=pad",
    description: "Televisor LED 4K UHD con Smart TV",
    stock: 15
  },
  {
    id: 2,
    name: "Zapatillas Deportivas",
    price: 79.99,
    category: "Calzado",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas.png",
    description: "Zapatillas deportivas para running",
    stock: 30
  },
  {
    id: 3,
    name: "Laptop HP Pavilion",
    price: 1299.99,
    category: "Computación",
    image: "https://assets.pcfactory.cl/public/foto/51149/1_1000.jpg?t=1752516723084",
    description: "Laptop con procesador Intel i7, 16GB RAM",
    stock: 8
  },
  {
    id: 4,
    name: "Smartphone iPhone 14",
    price: 999.99,
    category: "Celulares",
    image: "https://backonline.cl/cdn/shop/products/iPhone_14_Pro_Max_Space_Black_PDP_Image_Position-1a_CLES.jpg?v=1690317161",
    description: "iPhone 14 con cámara de 48MP",
    stock: 12
  },
  {
    id: 5,
    name: "Auriculares Sony",
    price: 199.99,
    category: "Audio",
    image: "https://clsonyb2c.vtexassets.com/arquivos/ids/465932/00-GENBA-WH-CH720N-B-Main-Image-Sony-Store-Online.jpg.jpg?v=638747953465070000",
    description: "Auriculares inalámbricos noise cancelling",
    stock: 25
  },
  {
    id: 6,
    name: "Mesa de Oficina",
    price: 299.99,
    category: "Muebles",
    image: "#",
    description: "Mesa de oficina moderna con cajones",
    stock: 10
  }
];