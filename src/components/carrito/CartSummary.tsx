import React from 'react';

interface CartSummaryProps {
  totalPrice: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ totalPrice, onCheckout }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Resumen de Compra</h5>
        <div className="d-flex justify-content-between mb-2">
          <span>Subtotal:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Envío:</span>
          <span>$0.00</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-3">
          <strong>Total:</strong>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <button
          onClick={onCheckout}
          className="btn btn-primary w-100"
        >
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};