import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CustomHeader, SearchBar } from './sharedComponents'
import { ProductsList } from './prodComponents'
import { getProducts, getProductsByQuery } from './actions'
import type { ProductProps } from './interfaces/products.interfaces'
import { Link } from 'react-router-dom'

export const ProdsApp = () => {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getProducts();
                const productsData = data.products;
                setProducts(productsData);
                setAllProducts(productsData);
                
                // Aplicar filtro si viene del slider
                const categoriaFiltro = location.state?.categoriaFiltro;
                if (categoriaFiltro) {
                    const filtered = productsData.filter(product =>
                        product.category.toLowerCase().includes(categoriaFiltro.toLowerCase())
                    );
                    setProducts(filtered);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
    }, [location.state])

    const handleSearch = useCallback(async (query: string) => {
        query = query.trim().toLowerCase();
        
        if (query.length === 0) {
            setProducts(allProducts);
            return;
        }
        
        try {
            const searchResult = await getProductsByQuery(query);
            if (searchResult.ok && searchResult.product) {
                setProducts([searchResult.product]);
            } else {
                setProducts(allProducts);
            }
        } catch (error) {
            console.error("Error en búsqueda:", error);
            setProducts(allProducts);
        }
    }, [allProducts]);

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <Link to="/" className="btn btn-outline-secondary">
                        ← Volver al Inicio
                    </Link>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando productos...</span>
                    </div>
                    <span className="ms-2">Cargando productos...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/" className="btn btn-outline-secondary">
                    ← Volver al Inicio
                </Link>
                {location.state?.categoriaFiltro && (
                    <span className="badge bg-primary fs-6">
                        Filtrado por: {location.state.categoriaFiltro}
                    </span>
                )}
            </div>

            <CustomHeader 
                title="Catálogo de Productos"
                text="Descubre nuestra amplia selección de productos"
            />

            <SearchBar 
                placeHolder="Buscar productos por nombre..." 
                onQuery={handleSearch}
            />
            
            <ProductsList products={products} />
        </div>
    )
}