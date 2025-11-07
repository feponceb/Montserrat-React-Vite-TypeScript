import React from 'react';
import { Link } from 'react-router-dom';

export const EmptyCart: React.FC = () => {
  return (
    <div className="text-center">
      <h2>Tu carrito está vacío</h2>
      <p className="text-muted">Agrega algunos productos para continuar</p>
      <Link to="/productos" className="btn btn-primary">
        Ir a Productos
      </Link>
    </div>
  );
};