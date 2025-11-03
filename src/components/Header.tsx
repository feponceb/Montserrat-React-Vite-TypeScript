

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-secondary bg-gradient">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0PDfyyodLAdbPjWwlzDCl2cVsAJdXsOUZu_z1K6uVBYyJsXP0AdiIWAxnQGqzYM9eTDcc-JOlxILrdfj4GqfHEkwFwaO_m0bER0TRQ&s=10" 
              alt="Logo Montserrat" 
              className="d-inline-block align-text-top"
              style={{ width: '150px', height: 'auto' }}
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Productos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

