import { useCart } from './context/CartContext';
import { CartItem, CartSummary, CartHeader, EmptyCart } from './components/carrito';

export const CarritoApp = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice,
    updateStock 
  } = useCart();

  const handleCheckout = () => {
    // Crear array de actualizaciones de stock
    const stockUpdates = cartItems.map(item => ({
      productId: item.product.id,
      quantity: item.quantity
    }));

    // Actualizar stock
    updateStock(stockUpdates);
    
    alert('¡Compra realizada con éxito! El stock ha sido actualizado.');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-4">
        <CartHeader onClearCart={clearCart} />
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <CartHeader onClearCart={clearCart} />

      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onQuantityChange={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <div className="col-md-4">
          <CartSummary 
            totalPrice={getTotalPrice()} 
            onCheckout={handleCheckout} 
          />
        </div>
      </div>
    </div>
  );
};