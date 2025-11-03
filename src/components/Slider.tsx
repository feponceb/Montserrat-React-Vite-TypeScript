
export const Slider = () => {
  return (
    <section className="slider-section">
      <div className="container-fluid px-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/src/assets/img/tele.png" className="d-block w-100" alt="Televisores" />
            </div>
            <div className="carousel-item">
              <img src="/src/assets/img/productos.png" className="d-block w-100" alt="Productos variados" />
            </div>
            <div className="carousel-item">
              <img src="/src/assets/img/zapatos.png" className="d-block w-100" alt="Zapatos" />
            </div>
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
  )
}