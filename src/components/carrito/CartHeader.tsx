import React from 'react';
import { Link } from 'react-router-dom';

interface CartHeaderProps {
  onClearCart: () => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ onClearCart }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <Link to="/" className="btn btn-outline-secondary">
        ← Volver al Inicio
      </Link>
      <h2 className="mb-0">Carrito de Compras</h2>
      <button onClick={onClearCart} className="btn btn-outline-danger">
        Vaciar Carrito
      </button>
    </div>
  );
};