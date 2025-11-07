import { useNavigate } from 'react-router-dom';
import type { ProductoCardProps } from "../interfaces/Productos";

interface ProductosProps {
  productos: ProductoCardProps[];
  titulo?: string;
}

export const Productos: React.FC<ProductosProps> = ({ 
  productos, 
  titulo = "Nuestros Productos Destacados" 
}) => {
  const navigate = useNavigate();

  const handleVerProductos = () => {
    navigate('/productos');
  };

  return (
    <section className="productos-section bg-light py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="mb-0">{titulo}</h2>
          <button 
            onClick={handleVerProductos}
            className="btn btn-outline-primary"
          >
            Ver Todos los Productos
          </button>
        </div>
        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div 
                className="card h-100 shadow-sm"
                style={{ cursor: 'pointer' }}
                onClick={() => handleVerProductos()}
              >
                <img 
                  src={producto.imagen} 
                  className="card-img-top" 
                  alt={producto.titulo}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.titulo}</h5>
                  <p className="card-text text-muted flex-grow-1">
                    {producto.descripcion}
                  </p>
                  <div className="mt-auto">
                    <p className="card-text">
                      <strong className="text-primary">${producto.precio}</strong>
                    </p>
                    <button className="btn btn-danger w-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}