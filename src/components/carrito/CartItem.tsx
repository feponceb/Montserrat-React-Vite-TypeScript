import React from 'react';
import type { CartItem as CartItemType } from '../../interfaces/products.interfaces';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onQuantityChange, onRemove }) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    onQuantityChange(item.product.id, newQuantity);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="img-fluid rounded"
              style={{ height: '80px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-4">
            <h5 className="card-title">{item.product.name}</h5>
            <p className="text-muted">{item.product.category}</p>
          </div>
          <div className="col-md-3">
            <p className="h5 text-primary">${item.product.price}</p>
          </div>
          <div className="col-md-2">
            <div className="input-group">
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                className="form-control text-center"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleQuantityChange(item.quantity + 1)}
                disabled={item.quantity >= item.product.stock}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-md-1">
            <button
              onClick={() => onRemove(item.product.id)}
              className="btn btn-danger"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};