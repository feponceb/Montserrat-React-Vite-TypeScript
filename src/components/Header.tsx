import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-secondary bg-gradient">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img 
              src="src\img\Montserrat_logo.png" 
              alt="Logo Montserrat" 
              className="d-inline-block align-text-top"
              style={{ width: '150px', height: 'auto' }}
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/carrito">
                  Carrito 
                  {getTotalItems() > 0 && (
                    <span className="badge bg-danger ms-1">{getTotalItems()}</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}