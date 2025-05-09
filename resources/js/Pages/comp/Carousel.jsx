
import React from 'react'

const Carousel = () => {
  return (
    <div id='NuestraFamilia' className='contenedor_carousel'>
      <div className="titulo_carousel flex flex-col justify-center items-center">
        <h2 className=''>Somos Vetipet</h2>
        <h3>Tu Veterinaria de Confianza</h3>
        <br />
      </div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active bg-white" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className='bg-white' aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className='bg-white' aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner d-flex items-center">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="img/img_3.webp"  className="mx-auto" alt="..." />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>  */}
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="img/img_1.webp"  className="mx-auto" alt="..." />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="img/img_2.webp" className="mx-auto" alt="..." />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
        </div>
        <button className="carousel-control-prev color-white" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Carousel