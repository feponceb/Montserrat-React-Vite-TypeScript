interface Slide {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  categoria: string;
}

export const Slider = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&h=400&fit=crop",
      titulo: "Tecnología de Vanguardia",
      descripcion: "Descubre los últimos avances en electrónica",
      categoria: "electrónicos"
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=400&fit=crop",
      titulo: "Moda y Estilo",
      descripcion: "Encuentra tu estilo único",
      categoria: "calzado"
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=400&fit=crop",
      titulo: "Innovación Digital",
      descripcion: "Tecnología que transforma tu vida",
      categoria: "computación"
    }
  ];

  return (
    <section className="slider-section">
      <div className="container-fluid px-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button 
                key={slide.id}
                type="button" 
                data-bs-target="#carouselExampleIndicators" 
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                // Se eliminó el onClick aquí
              >
                <img 
                  src={slide.imagen} 
                  className="d-block w-100" 
                  alt={slide.titulo}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h3>{slide.titulo}</h3>
                  <p>{slide.descripcion}</p>
                  {/* Botón decorativo sin funcionalidad */}
                  <button className="btn btn-primary" disabled>
                    Explorar {slide.categoria}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}