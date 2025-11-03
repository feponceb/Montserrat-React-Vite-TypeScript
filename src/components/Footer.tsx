export const Footer = () => {
    return (
      <footer className="bg-dark text-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <h5>Montserrat</h5>
              <p>Tu tienda de confianza para todos tus productos.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <h5>Enlaces rápidos</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Inicio</a></li>
                <li><a href="#" className="text-white text-decoration-none">Productos</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2023 Montserrat. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }