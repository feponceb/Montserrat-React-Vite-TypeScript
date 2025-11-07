export interface ProductProps {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    stock: number;
}

export interface ResponseProps {
    ok: boolean;
    statusCode: number;
    products: ProductProps[];
}

export interface ResponseNameProps {
    ok: boolean;
    statusCode: number;
    product: ProductProps;
}

export interface CartItem {
  product: ProductProps;
  quantity: number;
}

export interface StockUpdate {
  productId: number;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  updateStock: (updates: StockUpdate[]) => void; // Nueva función
}

