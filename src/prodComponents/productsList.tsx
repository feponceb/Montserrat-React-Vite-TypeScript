import { useNavigate } from 'react-router-dom';
import type { ProductProps } from '../interfaces/products.interfaces';
import { useState } from 'react';

interface Props {
    products: ProductProps[];
}

export const ProductsList = ({ products }: Props) => {
    const navigate = useNavigate();  
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
    
    const productsArray = Array.isArray(products) ? products : [products];

    const handleShowProduct = (product: ProductProps) => {
        navigate('/product-component', {
            state: {
                product: product
            }
        });
    }

    const handleImageError = (productId: number) => {
        setImageErrors(prev => new Set(prev).add(productId));
    };

    if (productsArray.length === 0) {
        return (
            <div className="container mt-4">
                <div className="alert alert-info text-center">
                    No se encontraron productos
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {productsArray.map((product) => (
                    <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div 
                            className="card h-100 shadow-sm" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleShowProduct(product)}
                        >
                            {imageErrors.has(product.id) ? (
                                <div 
                                    className="card-img-top d-flex align-items-center justify-content-center bg-light"
                                    style={{ height: '250px' }}
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
                                    className="card-img-top"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                    onError={() => handleImageError(product.id)}
                                />
                            )}
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text text-muted flex-grow-1">
                                    {product.description.substring(0, 100)}...
                                </p>
                                <div className="mt-auto">
                                    <p className="card-text">
                                        <strong className="text-primary">${product.price}</strong>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">{product.category}</small>
                                    </p>
                                    <p className="card-text">
                                        <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                                            {product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}