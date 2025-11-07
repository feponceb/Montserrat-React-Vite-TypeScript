import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { CartItem, CartContextType, ProductProps, StockUpdate } from '../interfaces/products.interfaces';
import { mockProducts } from '../data/mockProducts';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductProps) => {
    // Verificar stock antes de agregar
    if (product.stock <= 0) {
      alert('Producto sin stock disponible');
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Verificar que no exceda el stock disponible
        if (existingItem.quantity + 1 > product.stock) {
          alert('No hay suficiente stock disponible');
          return prevItems;
        }
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    // Verificar stock antes de actualizar cantidad
    const cartItem = cartItems.find(item => item.product.id === productId);
    if (cartItem && quantity > cartItem.product.stock) {
      alert('No hay suficiente stock disponible');
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  // Función para actualizar stock después de la compra
  const updateStock = (updates: StockUpdate[]) => {
    updates.forEach(update => {
      const productIndex = mockProducts.findIndex(p => p.id === update.productId);
      if (productIndex !== -1) {
        mockProducts[productIndex].stock -= update.quantity;
        // Asegurarse de que el stock no sea negativo
        if (mockProducts[productIndex].stock < 0) {
          mockProducts[productIndex].stock = 0;
        }
      }
    });
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    updateStock
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};