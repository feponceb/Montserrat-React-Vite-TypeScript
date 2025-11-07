import { useLocation, useNavigate } from "react-router-dom";
import type { ProductProps } from "../interfaces/products.interfaces";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export const ProductComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);
    const { addToCart } = useCart();
    
    const { product } = location.state as { product: ProductProps } || {};

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleAddToCart = () => {
        if (product && product.stock > 0) {
            addToCart(product);
            alert('Producto agregado al carrito!');
        }
    };

    if (!product) {
        return (
            <div className="container mt-4">
                <button onClick={handleGoBack} className="btn btn-secondary mb-3">
                    ← Volver
                </button>
                <div className="alert alert-danger">
                    No se encontraron datos del producto
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <button onClick={handleGoBack} className="btn btn-secondary mb-4">        
                ← Volver a productos
            </button>

            <div className="row">
                <div className="col-md-6">
                    {imageError ? (
                        <div 
                            className="d-flex align-items-center justify-content-center bg-light rounded shadow"
                            style={{ height: '400px' }}
                        >
                            <div className="text-center text-muted">
                                <i className="bi bi-image fs-1"></i>
                                <p className="mt-2">Imagen no disponible</p>
                            </div>
                        </div>
                    ) : (
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="img-fluid rounded shadow"
                            style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                            onError={() => setImageError(true)}
                        />
                    )}
                </div>
                <div className="col-md-6">
                    <div className="product-detail-info">
                        <h1 className="display-5 fw-bold">{product.name}</h1>
                        <p className="fs-3 text-primary">${product.price}</p>
                        <p className="text-muted">Categoría: {product.category}</p>
                        
                        <div className="mb-3">
                            <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'} fs-6`}>
                                {product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}
                            </span>
                        </div>
                        
                        <p className="lead">{product.description}</p>
                        
                        <button 
                            className="btn btn-primary btn-lg mt-3"
                            disabled={product.stock === 0}
                            onClick={handleAddToCart}
                        >
                            {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};