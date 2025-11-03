import type { ProductoProps } from "../interfaces/Productos"

export const Productos: React.FC = () => {
    const productos: ProductoProps[] = [
      {
        id: 1,
        titulo: "Televisores",
        descripcion: "Descubre nuestra amplia gama de televisores con la mejor tecnología del mercado.",
        imagen: "/src/assets/img/tele.png"
      },
      {
        id: 2,
        titulo: "Productos Variados",
        descripcion: "Encuentra una gran selección de productos para todas tus necesidades.",
        imagen: "/src/assets/img/productos.png"
      },
      {
        id: 3,
        titulo: "Calzado",
        descripcion: "La mejor calidad en calzado para toda la familia. Diseño y comodidad.",
        imagen: "/src/assets/img/zapatos.png"
      }
    ]
  
    return (
      <section className="productos-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nuestros Productos Destacados</h2>
          <div className="row g-4">
            {productos.map((producto) => (
              <div key={producto.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="card h-100 shadow-sm">
                  <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text flex-grow-1">{producto.descripcion}</p>
                    <a href="#" className="btn btn-danger mt-auto">Ver más</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }